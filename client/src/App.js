import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom'


import Home from './Components/Home'
import Navbar from './Components/Navbar'
import UserProfile from './Components/UserProfile'
import NoMatch from './NoMatch'
import FetchUser from './Components/FetchUser';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme => ({
  main:{
    maxHeight: 'calc(100vh - 128px)',
    overflow: 'auto',
  }
}))

export default withStyles(styles)(({classes}) => {
  console.log('Render App')

  return (
    <>
      <Navbar />
      <FetchUser>
        <Switch className={classes.main}>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </FetchUser>
    </>
  );
  })