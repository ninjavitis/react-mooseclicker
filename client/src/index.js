import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, } from 'react-router-dom';
import { AuthProvider } from "./Providers/AuthProvider";
import './index.css';
import App from './App';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import deepPurple from '@material-ui/core/colors/deepPurple';
import amber from '@material-ui/core/colors/amber'

import { initMiddleware, } from 'devise-axios';

// initialize the devise-axios middleware for token refreshing
initMiddleware();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[700],
    },
    secondary: {
      main: amber[800]
    }
  },
})

ReactDOM.render(
  <AuthProvider>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </AuthProvider>
  , 
  document.getElementById('root')
);

