import { getThemeTokens } from '@/themes/theme'
import { ThemeProvider, createTheme, useMediaQuery } from '@mui/material'
import React, { ReactNode, createContext, useMemo, useState } from 'react'

export const AppContext = createContext({ toggleColorMode: () => {} });

export type AppContextProviderPropTypes = {
  children: ReactNode
}

function AppContextProvider({children}: AppContextProviderPropTypes) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');
  
  const appContextProps = useMemo(
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
    <AppContext.Provider value={appContextProps}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default AppContextProvider;