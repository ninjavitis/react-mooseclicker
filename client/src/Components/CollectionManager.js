import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { AppContext } from '../Providers/AppProvider'

import Grid from '@material-ui/core/Grid'
import Collection from './Collection'
import HandBuilder from './HandBuilder'
import SetAlbum from './SetAlbum'
import Droppable from './Droppable'

const styles = (theme=>({
  main:{
    maxHeight: 'calc(100vh - 84px)',
  },
}))


const CollectionManager =  withStyles(styles)(({ classes }) => {
  const { addToHand } = useContext(AppContext)

return(
  <Grid className={classes.main} container>
    <Grid item xs={12} md={6}>
      <Collection />
    </Grid>
    <Grid item xs={12} md={6}>
      <Droppable type={ 'collectible' } onDrop={ addToHand }>
        <HandBuilder />
      </Droppable>
    </Grid>
  </Grid>
)
})

export default CollectionManager