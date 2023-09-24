// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type SpotifyArtistData = {
    ok: true,
    [x: string]: unknown
} | {
    ok: false,
    error: string
}

const createServerErrorSetter = (res: NextApiResponse<SpotifyArtistData>) => (errorMessage: string) => {
    res.status(500).json({
        ok: false,
        error: errorMessage
    })
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<SpotifyArtistData>
) {
    const setServerError = createServerErrorSetter(res);

    const artistId = req.query["artistId"];
    if(typeof artistId !== 'string') {
        setServerError("query param artistId not defined");
        return;
    }
    
    const spotifyTokenUrl = new URL('https://accounts.spotify.com/api/token');
    const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
    const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;

    if(spotifyClientId == null || spotifyClientSecret == null) {
        setServerError("Environment variable is undefined");
        return;
    }

    // Add the query parameters to the URL object
    spotifyTokenUrl.searchParams.append('grant_type', 'client_credentials');
    spotifyTokenUrl.searchParams.append('client_id', spotifyClientId);
    spotifyTokenUrl.searchParams.append('client_secret', spotifyClientSecret);

    const spotifyTokenRes = await fetch(spotifyTokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })

    const data = await spotifyTokenRes.json();

    if(!spotifyTokenRes.ok) {
        res.status(spotifyTokenRes.status).json(data);
        return;
    }

    const { access_token, token_type, expires_in } = data;
    if(typeof access_token !== 'string') setServerError("spotify access_token is not defined");
    else if (typeof token_type !== 'string') setServerError("spotify token_type is not defined");
    else if (typeof expires_in !== 'number') setServerError("spotify expires_in is not defined");
    else {
        const spotifyArtistUrl = new URL(artistId, "https://api.spotify.com/v1/artists/");

        const spotifyArtistRes = await fetch(spotifyArtistUrl, {
            method: "GET",
            headers: {
                "Authorization":  `${token_type}  ${access_token}`
            }
        })

        if(!spotifyArtistRes.ok) {
            setServerError(await spotifyArtistRes.text());
            return
        }

        res.status(spotifyArtistRes.status).json(await spotifyArtistRes.json());
    }
}