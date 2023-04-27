import React, { ComponentProps } from "react"
import AdbIcon from '@mui/icons-material/Adb';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export type LogoPropTypes = {
    /** size of the logo
     *  @default ``` 28 ```
     **/
    size?: number
    /** color of the logo
     *  @default ``` 'inherit' ```
     **/
    color?: ComponentProps<typeof Typography>['color']
}

/**
 * renders the app logo
 *
 * @author [Jacob Head](https://github.com/HeadJk)
 */
const Logo = ({size = 28, color = "inherit"}: LogoPropTypes) => {
    const getTextSize = () => 0.8 * size

    return (
        <Stack direction="row" justifyContent="center" alignItems="center">
            <AdbIcon sx={{ mr: 1, fontSize: size, color }} />
            <Typography
                variant="h6"
                noWrap
                sx={{
                    fontSize: getTextSize(),
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color,
                    textDecoration: 'none',
                }}
            >
                LOGO
            </Typography>
        </Stack>
    );
};

export default Logo;