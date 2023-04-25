import { getThemeTokens } from '../../src/themes/theme'
import { Stack, ThemeProvider, createTheme } from '@mui/material'
import { StoryContext } from '@storybook/react';
import React, { ReactElement, createContext, useMemo } from 'react'
import type { globalTypes } from '../preview';
import { UPDATE_GLOBALS, FORCE_RE_RENDER  } from '@storybook/core-events';
import { AppContext } from '../../src/context/AppContext';
import { addons } from '@storybook/preview-api';

export type MockAppContextProviderPropTypes = {
  children: ReactElement,
  context: StoryContext
}

type GlobalThemeOptions = (typeof globalTypes)['theme']['toolbar']['items'][number]['value']

function MockAppContextProvider({ children, context }: MockAppContextProviderPropTypes) {
  const themeColorMode: GlobalThemeOptions = context.globals.theme

  const appContextProps = useMemo(
    () => ({
      toggleColorMode: () => {
        if(themeColorMode === "side-by-side") return;
        const toggledColor = themeColorMode === 'light' ? 'dark' : 'light';
        // Updates Storybook global value
        addons.getChannel().emit(UPDATE_GLOBALS, {
          globals: { theme: toggledColor }
        })
      },
    }),
    [themeColorMode],
  );

  const lightTheme = useMemo(
    () =>
      createTheme(getThemeTokens("light")),
    [],
  );

  const darkTheme = useMemo(
    () =>
      createTheme(getThemeTokens("dark")),
    [],
  );

  switch(themeColorMode)
  {
    case "side-by-side": return (
      <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap">
        <AppContext.Provider value={appContextProps}>
          <ThemeProvider theme={lightTheme}>
            {children}
          </ThemeProvider>
        </AppContext.Provider>
        <AppContext.Provider value={appContextProps}>
          <ThemeProvider theme={darkTheme}>
            {children}
          </ThemeProvider>
        </AppContext.Provider>
      </Stack>
    )
  
    default: return (
      <AppContext.Provider value={appContextProps}>
        <ThemeProvider theme={themeColorMode === "light" ? lightTheme : darkTheme}>
          {children}
        </ThemeProvider>
      </AppContext.Provider>
    );

  }
}


export default MockAppContextProvider;