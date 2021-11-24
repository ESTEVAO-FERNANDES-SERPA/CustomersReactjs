import React from 'react'
import { Container, Box, } from "@mui/material";

import Header from '../partials/Header/Header'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        padding: '10px 0',
        background: 'red'
    }
});

const Default = ({ children }) => {
    const classes = useStyles();
    return (
        <>
            <Header />
            <Container className={classes.container} maxWidth="md">
                {children}
            </Container>
        </>
    )
}

export default Default