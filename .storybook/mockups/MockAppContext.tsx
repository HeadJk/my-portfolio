import { getThemeTokens } from '../../src/themes/theme'
import { Stack, ThemeProvider, createTheme, useMediaQuery } from '@mui/material'
import { StoryContext } from '@storybook/react';
import React, { ReactElement, createContext, useMemo, useState } from 'react'

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export type AppThemeContextPropTypes = {
  children: ReactElement,
  context: StoryContext
}


function MockAppContext({ children, context }: AppThemeContextPropTypes) {
  const themeColorMode = context.parameters.theme || context.globals.theme

  const theme = useMemo(
    () =>
      createTheme(getThemeTokens(themeColorMode)),
    [themeColorMode],
  );

  switch(themeColorMode)
  {
    case "side-by-side": return (
      <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap">
        <ColorModeContext.Provider value={themeColorMode}>
          <ThemeProvider theme={createTheme(getThemeTokens('light'))}>
            {children}
          </ThemeProvider>
        </ColorModeContext.Provider>
        <ColorModeContext.Provider value={themeColorMode}>
          <ThemeProvider theme={createTheme(getThemeTokens('dark'))}>
            {children}
          </ThemeProvider>
        </ColorModeContext.Provider>
      </Stack>
    )
  
    default: return (
      <ColorModeContext.Provider value={themeColorMode}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    );

  }
}


export default MockAppContext;