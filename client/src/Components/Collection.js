import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Providers/AuthProvider'
import { AppContext } from '../Providers/AppProvider'
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Collectible from './Collectible'

const styles = (theme =>(
  {
    gridList:{
      height:'500px',
    },
    item:{
      
    },
  }
))

export default withStyles(styles)(({items, classes}) => {
  const {authenticated} = useContext(AuthContext)
  const { collection, fetchCollection, updateActiveCollectible } = useContext(AppContext)

  useEffect(()=>{
    if (authenticated && collection.length === 0){
      fetchCollection()
    }
  },[authenticated])

  const delay = (step,interval) => {
    let base = 200;

    return `${base + (interval * (step - 1))}ms`
  }

  const Main = () => {
    if (collection.length > 0) {
      return (
        <Grid container spacing={1}>
            {collection.map((item,i) =>
              <Grow in={true} style={{ transitionDelay: delay(i,100)}}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Collectible 
                className={classes.item} 
                key={item.id} 
                name={item.name} 
                level={item.level} 
                tier={item.tier}
                clicks={item.clicks} 
                clicksToLevel={item.clicksToLevel} 
                artist={item.artist}
                created_at={item.created_at}
                action={()=>updateActiveCollectible(item.id)}
              />
            </Grid>
            </Grow>
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
