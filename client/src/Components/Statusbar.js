import React, {useContext} from 'react';
import { withStyles } from '@material-ui/core';

import {AuthContext} from '../Providers/AuthProvider'
import {AppContext} from '../Providers/AppProvider'

import ToolBar from '@material-ui/core/ToolBar'
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography'

import deepPurple from '@material-ui/core/colors/deepPurple'
import lime from '@material-ui/core/colors/lime'

const styles = (theme => ({
  statusBar:{
    minHeight: '3%',
    backgroundColor : lime[600],
  },
  chip: {
    margin: theme.spacing(1)
  },
  grow:{
    flexGrow: 1,
  }
}))

export default withStyles(styles)(({classes})=>{
  const {authenticated} = useContext(AuthContext)
  const {user} = useContext(AppContext)

  const PlayerStatus = () => {
    return(
      <>
        <Typography className={classes.chip}>
          {'Click Bank: ' + user.remainingClicks} 
        </Typography>
        <Typography className={classes.chip}>
          {'CP: ' + user.points}
        </Typography>
      </>
    )
  }

  return(
    <>
      <ToolBar className={classes.statusBar}>
        <div className={classes.grow} />
        {authenticated && <PlayerStatus />}
      </ToolBar>
    </>
  )
})