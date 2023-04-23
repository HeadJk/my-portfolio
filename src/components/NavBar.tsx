import AdbIcon from '@mui/icons-material/Adb';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import React, { ComponentProps } from 'react';
import { alpha } from '@mui/material'

export type NavItem = {
    label: string,
    /** Should be a URL if it is a string */
    destination: string,
}

export type NavBarPropTypes = ComponentProps<typeof AppBar> & {
    /** A list of all navigatable items from the navbar. */
    menu: readonly NavItem[],
    /** Callback executed when color mode switch is toggled. */
    onToggleColorMode: () => void,
}

/**
 * AppBar used for website navigation.
 *
 * @author [Jacob Head](https://github.com/HeadJk)
 */
const NavBar = ({ menu, onToggleColorMode, ...props }: NavBarPropTypes) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const theme = useTheme();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const renderNavItem = (navItem: NavItem): JSX.Element => {
        return (
            <MenuItem key={navItem.label} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{navItem.label}</Typography>
            </MenuItem>
        )
    }

    const generateNavItemStyles = (theme: Theme) => (
        theme.palette.mode === 'light' ? {
            color: theme.palette.primary.contrastText,
            '&:hover': {
                bgcolor: theme.palette.primary.light,
                color: theme.palette.primary.contrastText,
            }
        } : {
            color: theme.palette.text.primary,
            '&:hover': {
                bgcolor: alpha(theme.palette.primary.dark, 0.15),
                color: theme.palette.primary.main,
            },
        }
    )

    const renderNavItemButton = (navItem: NavItem): JSX.Element => {
        return (
            <Button
                key={navItem.label}
                onClick={handleCloseNavMenu}
                sx={[
                    { my: 2, display: 'block' },
                    generateNavItemStyles
                ]}
            >
    { navItem.label }
            </Button >
        )
    }

return (
    <AppBar {...props} color='primary'>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Stack direction="row" sx={[ {cursor: 'pointer'}, generateNavItemStyles ]}>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
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

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {menu.map((navItem) => renderNavItem(navItem))}
                    </Menu>
                </Box>
                <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href=""
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    LOGO
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {menu.map((navItem) => renderNavItemButton(navItem))}
                </Box>
                <IconButton sx={{ ml: 1 }} onClick={onToggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Toolbar>
        </Container>
    </AppBar>
);
};

export default NavBar;