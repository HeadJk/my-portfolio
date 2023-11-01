import { SpotifyArtistData } from '@/pages/api/spotifyArtist';
import React, { useEffect, useState } from 'react';
import { usePromise } from '@/hooks/usePromise';

export type SpotifyArtistPropTypes = {
    artistId: string
}

/**
 * 
 *
 * @author [Jacob Head](https://github.com/HeadJk)
 */
const SpotifyArtist = ({ artistId }: SpotifyArtistPropTypes) => {

    const hostName = process.env.NEXT_PUBLIC_HOST_NAME;
    if(typeof hostName !== 'string') {
        throw new Error("Environment variable not defined");
    }
    const spotifyUrl = new URL('/api/spotifyArtist', hostName);
    spotifyUrl.searchParams.append("artistId", artistId );

    const data = usePromise<SpotifyArtistData>(fetch(spotifyUrl).then(res => res.json()));

    return (
        <div>{JSON.stringify(data)}</div>
    );
};

export default SpotifyArtist;