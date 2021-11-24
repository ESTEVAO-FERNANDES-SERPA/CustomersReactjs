import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, pink, green } from '@mui/material/colors';

import App from './App';
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: purple[900]
    },
    secondary: {
      main: green[900]
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


