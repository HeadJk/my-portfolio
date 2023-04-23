import { Palette, PaletteMode, createTheme, Theme, ThemeOptions } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";

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

export const getThemeTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        primary: {
            main: "#00B2CA"
        },
    }
} as const satisfies ThemeOptions);