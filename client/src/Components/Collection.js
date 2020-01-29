import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider'
import { AppContext } from '../Providers/AppProvider'
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'

import GridList from '@material-ui/core/GridList'
import Paper from '@material-ui/core/Paper'
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {ReactComponent as Placeholder} from '../Icons/Moose_loose.svg'
import Typography from '@material-ui/core/Typography'
import Collectible from './Collectible'

const styles = (theme =>(
  {
    gridList:{
      height:'500px',
    },
  }
))

export default withStyles(styles)(({items, classes}) => {
  const {authenticated} = useContext(AuthContext)
  const { collection, fetchCollection, updateActiveCollectible } = useContext(AppContext)

  useEffect(()=>{
    authenticated && fetchCollection()
  },[authenticated])

  const Main = () => {
    if (collection.length > 0) {
      return (
          <Grid container spacing={1}>
            {collection.map((item,i) =>
            <Grid item md={3}>
            <Collectible className={classes.item} key={item.id} name={item.name} level={item.level} clicks={item.clicks} clicksToLevel={1} artist={'Artist: Moose Ross'}/>
            </Grid>
            )}
            </Grid>
      )
    } else {
      return(
        <Typography>Loading Collection...</Typography>
      )
    }
  }

  return(
    <Paper>
      <Main />
    </Paper>
  )
})
