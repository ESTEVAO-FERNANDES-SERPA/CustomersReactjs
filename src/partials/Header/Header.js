import * as React from 'react';
import { useState } from 'react';
import { AppBar, Box, Button, Typography, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";


import { Menu as MenuIcon } from '@mui/icons-material';

import useStyles from './Header.style';



const Header = () => {
    const classes = useStyles();

    const [menuOpen, setMenuOpen] = useState(false)
    const handleToggleMenu=()=>{
        setMenuOpen(!menuOpen)
    }
    return (
        <>
            <Box className={classes.title}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={()=> handleToggleMenu()}
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
            <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
                <List>
                    <ListItem>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText>Cadastro de Clientes</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}
export default Header