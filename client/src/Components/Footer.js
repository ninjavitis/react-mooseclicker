import React from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import BottomNavigation from '@material-ui/core/BottomNavigation'



const styles = (theme =>(
  {
    footer:{
      padding: '20px 30px 40px 30px',
      flexShrink: 0,
    },
    link:{
      textDecoration:'none',
    },
  }
))

export default withStyles(styles)(({classes}) => {
  return(
    <AppBar position="static">
      <ToolBar className={classes.footer}>
        <Grid>
          <Grid item>
            <Typography variant="h6">
              THE MOOSE IS LOOSE!
            </Typography>
            <Typography>
            &copy; Peter Mackay 2019
            </Typography>
            <Typography>
              Moose icon by <Link href="https://www.flaticon.com/authors/monkik" title="monkik" color='secondary'>monkik
              </Link> from <Link href="https://www.flaticon.com/" title="Flaticon" color="secondary">www.flaticon.com</Link>
            </Typography>
          </Grid>
        </Grid>
      </ToolBar>
    </AppBar>
  )
})





