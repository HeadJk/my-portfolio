import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { Tooltip, alpha, useTheme } from '@mui/material';
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
import React, { ComponentProps } from 'react';
import Link from 'next/link';
import Logo from './Logo';

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
                href={navItem.destination}
                key={navItem.label}
                onClick={handleCloseNavMenu}
                sx={[
                    { my: 2, display: 'block' },
                    generateNavItemStyles
                ]}
            >
                {navItem.label}
            </Button >
        )
    }

    return (
        <AppBar {...props} color='primary'>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Tooltip title="Navigate to home page">
                        <Button href='/' sx={[{ display: { xs: 'none', md: 'block' } }, generateNavItemStyles]}>
                            <Logo />
                        </Button>
                    </Tooltip>

                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="menu for the navigation bar"
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
                    <Tooltip title="Navigate to home page">
                        <Button href='/' sx={[{ display: { xs: 'block', md: 'none' } }, generateNavItemStyles]}>
                            <Logo />
                        </Button>
                    </Tooltip>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {menu.map((navItem) => renderNavItemButton(navItem))}
                    </Box>
                    <Tooltip title="Toggle light/dark theme">
                        <IconButton size="large" sx={[generateNavItemStyles]} onClick={onToggleColorMode} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;