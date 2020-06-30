import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles'

import Box from '@material-ui/core/Box'

const styles = ( theme => ({
  box:{
    width: '105px',
    height: '155px',
    backgroundColor: '#bbbbbb',
    borderColor: '#aaaaaa',
    borderRadius: '5px',
    margin: '0px 10px',
  }
}))


const CardDropZone = withStyles(styles)(({classes,requirement}) => {
  return(
    <Box className={classes.box}>{requirement.type}:{requirement.pattern}</Box>
  )
})

export default CardDropZone
