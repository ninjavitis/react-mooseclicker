import React, {useContext} from 'react';
import {AuthContext} from '../Providers/AuthProvider'

// Material UI 
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Mooseclicker components
import Collectible from './Collectible'
import ShopBox from './ShopBox'
import Collection from './Collection'

const styles = (theme => (
  {
    displayArea:{},
    grid:{
      flexWrap: 'wrap',
      padding: '10px',
    },
    shopPanel:{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    activeCollectible:{
    }
  }
  ))

export default withStyles(styles)(({classes}) => { 
  const {authenticated} = useContext(AuthContext)

  return(
    <Grid
      className={classes.grid}
      container
      direction="row"
      spacing={5}
    >
      <Grid item xs={12} lg={8}>
        <Grid container direction="row">
        <Grid item xs="auto" lg={2} />
        <Grid item xs={12} lg={8}>
          <Collectible className={classes.activeCollectible}/>
        </Grid>
        <Grid item xs="auto" lg={2} />
        </Grid>
        
        {
          authenticated && <Collection className={classes.collection} />
        }
      </Grid>
      <Grid item xs={12} lg={4}>
        <ShopBox className={classes.shopPanel}/>
      </Grid>
    </Grid>
  )
})

