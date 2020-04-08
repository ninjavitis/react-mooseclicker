import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { AppContext } from '../Providers/AppProvider'

import Grid from '@material-ui/core/Grid'
import Collection from './Collection'
import HandBuilder from './HandBuilder'
import Droppable from './Droppable'

const styles = (theme=>({

}))


const CollectionManager =  withStyles(styles)(({ classes }) => {
  const { addToHand } = useContext(AppContext)

return(
  <Grid container>
    <Grid item xs={12} md={6}>
      <Collection />
    </Grid>
    <Grid item xs={12} md={6}>
      <Droppable type='collectible' dropAction={addToHand}>
        <HandBuilder />
      </Droppable>
    </Grid>
  </Grid>
)
})

export default CollectionManager