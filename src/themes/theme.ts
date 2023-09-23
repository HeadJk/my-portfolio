import { PaletteMode, ThemeOptions } from "@mui/material";
import { Roboto } from 'next/font/google';

declare module '@mui/material/styles' {
    // interface Theme {
    //     status: {
    //         danger: string;
    //     };
    // }
    // // allow configuration using `createTheme`
    // interface ThemeOptions {
    //     status?: {
    //         danger?: string;
    //     };
    // }
}

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const getThemeTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        primary: {
            main: "#00B2CA"
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
}) as const satisfies ThemeOptions;