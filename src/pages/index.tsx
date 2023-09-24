import Page from '@/components/Page';
import SpotifyArtist from '@/components/SpotifyArtist';
import Head from 'next/head';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';

export default function Home() {

  return (
    <Page>      
      <Head>
        <title>Home</title>
        <meta name="description" content="The home page for Jake Head's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ErrorBoundary onError={() => {console.log("HREEEEEEEEE")}} fallback={<div>Error...</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <SpotifyArtist />
        </Suspense>
      </ErrorBoundary>
    </Page>
  )
}