import { SpotifyArtistData } from '@/pages/api/spotifyArtist';
import React, { useEffect, useState } from 'react';

export type SpotifyArtistPropTypes = {
    
}

function wrapPromise<T>(promise: Promise<T>) {
    let status = 'pending';
    let result : T;
    let suspender = promise.then(
        r => {
            status = 'success';
            result = r;
        },
        e => {
            status = 'error';
            result = e;
        }
    );
    return {
        read() {
            if (status === 'pending') {
                throw suspender;
            } else if (status === 'error') {
                throw result;
            } else if (status === 'success') {
                return result;
            }
        }
    };
}

function useGetData<T>(promise: Promise<T>) {
    const [resource, setResource] = useState<ReturnType<typeof wrapPromise<T>> | null>(null);
    useEffect(() => {
      const resource = wrapPromise(promise);
      setResource(resource);
    }, []);
  
    return resource?.read();
  };

/**
 * 
 *
 * @author [Jacob Head](https://github.com/HeadJk)
 */
const SpotifyArtist = ({}: SpotifyArtistPropTypes) => {

    const hostName = process.env.NEXT_PUBLIC_HOST_NAME;
    if(typeof hostName !== 'string') {
        throw new Error("Environment variable not defined");
    }
    const spotifyUrl = new URL('/api/spotifyArtist', hostName);
    spotifyUrl.searchParams.append("artistId", "4Z8W4fKeB5YxbusRsdQVPb");

    const data = useGetData<SpotifyArtistData>(fetch(spotifyUrl).then(res => res.json()));
    if(data != null && !data.ok) throw new Error("Error with the spotify api");

    return (
        <div>{JSON.stringify(data)}</div>
        // <div>{data.name}</div>
    );
};

export default SpotifyArtist;