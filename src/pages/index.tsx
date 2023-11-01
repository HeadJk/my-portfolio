import Page from '@/components/Page';
import SpotifyArtist from '@/components/SpotifyArtist';
import Head from 'next/head';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import { Skeleton, Stack } from '@mui/material';


const SpotifyArtistSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant='circular' width={40} height={40} />
      <Skeleton variant='rounded' width={100} height={60} />
      <Skeleton variant='rounded' width={100} height={40} />
    </Stack>
  )
}

export default function Home() {

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