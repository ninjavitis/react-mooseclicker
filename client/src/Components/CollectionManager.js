import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Collection from './Collection'
import HandBuilder from './HandBuilder'
import Droppable from './Droppable'

const styles = (theme=>({
  main:{
    display: 'flex',
  }
}))

const CollectionManager = withStyles(styles)(({classes}) => {
return(
  <div className={classes.main}>
    <Collection />
    <Droppable type={'collectible'}>
      <HandBuilder />
    </Droppable>
  </div>
)
})

export default CollectionManager