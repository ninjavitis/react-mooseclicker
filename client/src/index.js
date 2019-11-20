import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, } from 'react-router-dom';
import { AuthProvider } from "./Providers/AuthProvider";
import {MooseProvider} from './Providers/MooseProvider'
import {ShopProvider} from './Providers/ShopProvider'
import './index.css';
import App from './App';
import {MuiThemeProvider, createMuiTheme, responsiveFontSizes} from '@material-ui/core'
import deepPurple from '@material-ui/core/colors/deepPurple';
import amber from '@material-ui/core/colors/amber'

import { initMiddleware, } from 'devise-axios';

// initialize the devise-axios middleware for token refreshing
initMiddleware();

let theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[700],
    },
    secondary: {
      main: amber[800]
    }, 
    background:{

    }
  },
})

theme = responsiveFontSizes(theme)

ReactDOM.render(
  <AuthProvider>
    <MooseProvider>
      <ShopProvider>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MuiThemeProvider>
      </ShopProvider>
    </MooseProvider>
  </AuthProvider>
  , 
  document.getElementById('root')
);

