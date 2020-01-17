import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider'
import { AppContext } from '../Providers/AppProvider'
import { withStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList'
import Paper from '@material-ui/core/Paper'
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {ReactComponent as Placeholder} from '../Icons/Moose_loose.svg'

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

  return(
    <Paper>
      <GridList  className={classes.gridList} cols={5}>
          {collection.map((item,i) =>
            <GridListTile className={classes.item} onClick={()=>updateActiveCollectible(item.id)} key={item.id} cols={1}>
            <Placeholder />
            <GridListTileBar 
              title={item.name}
              subtitle={<span>Level:{item.level} Clicks:{item.clicks}</span>}
            />
          </GridListTile>
          )}
        </GridList>
    </Paper>
  )
})
