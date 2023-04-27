import { Stack, ThemeProvider, createTheme } from '@mui/material';
import { UPDATE_GLOBALS } from '@storybook/core-events';
import { addons } from '@storybook/preview-api';
import { StoryContext } from '@storybook/react';
import React, { ReactElement, useMemo, useEffect } from 'react';
import { AppContext } from '../../src/context/AppContext';
import { getThemeTokens } from '../../src/themes/theme';
import type { globalTypes } from '../preview';

export type MockAppContextProviderPropTypes = {
  children: ReactElement,
  context: StoryContext
}

type GlobalThemeOptions = (typeof globalTypes)['theme']['toolbar']['items'][number]['value']

function MockAppContextProvider({ children, context }: MockAppContextProviderPropTypes) {
  const themeColorMode: GlobalThemeOptions = context.globals.theme

  // Update story background color
  useEffect(() => {
    const body = window.document.body;
    if(themeColorMode === 'light') body.style.backgroundColor = lightTheme.palette.background.default
    else if(themeColorMode === 'dark') body.style.backgroundColor = darkTheme.palette.background.default
  }, [themeColorMode])

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