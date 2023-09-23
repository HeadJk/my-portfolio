import { getThemeTokens } from '@/themes/theme'
import { useMediaQuery } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { ReactNode, createContext, useMemo, useState } from 'react'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useLocalStorage } from 'usehooks-ts';

export const AppContext = createContext({ toggleColorMode: () => {} });

export type AppContextProviderPropTypes = {
  children: ReactNode
}

function AppContextProvider({children}: AppContextProviderPropTypes) {
  const prefersDarkModeSystemPref = useMediaQuery('(prefers-color-scheme: dark)');
  const [prefersDarkMode, setPrefersDarkMode] = useLocalStorage("prefers-dark-mode", prefersDarkModeSystemPref)
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');
  
  const appContextProps = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        setPrefersDarkMode((prevMode) => !prevMode);
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
      <CssBaseline />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default AppContextProvider;