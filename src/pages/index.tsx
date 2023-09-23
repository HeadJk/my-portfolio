import Page from '@/components/Page';
import Head from 'next/head';
import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    const hostName = process.env.NEXT_PUBLIC_HOST_NAME;
    if(typeof hostName !== 'string') {
      throw new Error("Environment variable not defined");
    }
    const spotifyUrl = new URL('/api/spotifyArtist', hostName);
    spotifyUrl.searchParams.append("artistId", "4Z8W4fKeB5YxbusRsdQVPb");
    fetch(spotifyUrl)
      .then(res => res.json())
      .then(console.log)
  }, [])

  return (
    <Page>      
      <Head>
        <title>Home</title>
        <meta name="description" content="The home page for Jake Head's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Page>
  )
}