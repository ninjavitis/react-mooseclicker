import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom'


import Home from './Components/Home'
import Navbar from './Components/Navbar'
import NoMatch from './NoMatch'
import FetchUser from './Components/FetchUser';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme => ({
  
}))

export default withStyles(styles)(({classes}) => {
  return (
    <>
      <Navbar />
      <FetchUser>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </FetchUser>
    </>
  );
  })