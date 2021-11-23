import * as React from 'react';
import { AppBar, Box, Button, Typography, Toolbar, IconButton } from "@mui/material";


import { Menu as MenuIcon } from '@mui/icons-material';

import useStyles from './Header.style';



const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.title}>
            <AppBar className={classes.navbar}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Header