import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import grey from '@material-ui/core/colors/grey';

import Moose from './Moose'

const styles = (theme => (
  {
    displayArea:{
      background: grey[100]
    },
    grid:{
      padding: '50px'
    },
  }
  ))

export default withStyles(styles)(({classes}) => { 
  return(
    <Container className={classes.displayArea}>
      <div className={classes.column}>
        <div className={classes.mainRow}>
          <Grid
            className={classes.grid}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={4}>
              <Moose />
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  )
})

