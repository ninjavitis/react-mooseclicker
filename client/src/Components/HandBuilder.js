import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'

const styles = (theme=>({
  main:{
    Width:'50%',
  }
}))

const HandBuilder = withStyles(styles)(({classes}) => {
return(
  <div className={classes.main}>
    <Grid container spacing={1}>
    </Grid>
  </div>
)
})

export default HandBuilder