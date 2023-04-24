import { getThemeTokens } from '@/themes/theme'
import { ThemeProvider, createTheme, useMediaQuery } from '@mui/material'
import React, { ReactElement, createContext, useMemo, useState } from 'react'

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export type AppThemeContextPropTypes = {
  children: ReactElement
}

function AppContext({children}: AppThemeContextPropTypes) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');
  
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme(getThemeTokens(mode)),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default AppContext;