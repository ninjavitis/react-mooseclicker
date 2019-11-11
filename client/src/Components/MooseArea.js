import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'

const theme = (theme => (
  {
    grow:{
      flexGrow: 1,
    }
  }
  ))

export default withStyles()(({classes}) => {
  return(
    <Paper className={grow}>
      test
    </Paper>
  )
})
