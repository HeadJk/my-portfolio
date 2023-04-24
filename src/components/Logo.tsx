import React from "react"
import AdbIcon from '@mui/icons-material/Adb';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export type LogoPropTypes = {
    
}

/**
 * 
 *
 * @author [Jacob Head](https://github.com/HeadJk)
 */
const Logo = ({}: LogoPropTypes) => {
    return (
        <Stack direction="row" justifyContent="center" alignItems="center">
            <AdbIcon sx={{ mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                LOGO
            </Typography>
        </Stack>
    );
};

export default Logo;