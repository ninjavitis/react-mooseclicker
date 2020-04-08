import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import Collection from './Collection'
import HandBuilder from './HandBuilder'
import Droppable from './Droppable'

const styles = (theme=>({

}))


const CollectionManager =  withStyles(styles)(({classes}) => {
return(
  <Grid container>
    <Grid item xs={12} md={6}>
      <Collection />
    </Grid>
    <Grid item xs={12} md={6}>
      <HandBuilder />
    </Grid>
  </Grid>
)
})

export default CollectionManager