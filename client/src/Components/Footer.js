import React,{useContext} from 'react';
import {AuthContext} from '../Providers/AuthProvider'
import {AppContext} from '../Providers/AppProvider'

import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import Chip from '@material-ui/core/Chip';




const styles = (theme =>(
  {
    footer:{
      padding: '5px',
      flexShrink: 0,
    },
    link:{
      textDecoration:'none',
    },
    chip: {
      margin: theme.spacing(1)
    },
    grow:{
      flexGrow: 1,
    }
  }
))

export default withStyles(styles)(({classes}) => {
  const {authenticated} = useContext(AuthContext)
  const {user} = useContext(AppContext)


  const PlayerStatus = () => {
    return(
      <>
       <Chip label={'Click Bank: ' + user.remainingClicks} className={classes.chip} />
       <Chip label={'CP: ' + user.points} className={classes.chip} />
     </>
    )
    }

  return(
    <AppBar position="static">
      <ToolBar className={classes.footer}>
      <div className={classes.grow} />
      {authenticated && <PlayerStatus />}
        {/* <Grid>
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
        </Grid> */}
      </ToolBar>
    </AppBar>
  )
})





