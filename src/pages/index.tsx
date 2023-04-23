import NavBar from '@/components/NavBar'
import MainMenu from '@/menus/MainMenu'
import Head from 'next/head'
import React, { useContext } from 'react'
import AppContext, { ColorModeContext } from '../context/AppContext'

function Home() {
  const colorMode = useContext(ColorModeContext);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <NavBar menu={MainMenu} onToggleColorMode={colorMode.toggleColorMode} position='relative' />
      </main>
    </>
  )
}

export default function HomeWithContext() {
  return (
    <AppContext>
      <Home />
    </AppContext>
  )
}