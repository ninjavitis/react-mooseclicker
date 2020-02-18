// React Imports
import React from 'react';

import Moment from 'react-moment';

// Material UI Imports
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid'



// Colors
import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'
import deepPurple from '@material-ui/core/colors/deepPurple'
import lightGreen from '@material-ui/core/colors/lightGreen'
import orange from '@material-ui/core/colors/orange'
import grey from '@material-ui/core/colors/grey'

// Icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import TodayIcon from '@material-ui/icons/Today';


// Other Imports
import {ReactComponent as Moose} from '../Icons/Moose_loose.svg'


const styles = (theme => ({
  card:{
    position: 'relative',
  },
  overlayBox:{
    position: 'absolute',
    top: '66.67%',
    paddingRight: '7%',
    paddingLeft: '7%',

  },
  
  headerText:{
    fontSize: 14,
  },
  center: {
    alignItems:'center',
    justifyContent:'center',
    justify:'center',
    margin:'auto'
  },
  topToolBar:{
    display: 'flex',
    alignItems:'center',
    height:'12%',
    paddingLeft:'2%',
    paddingRight:'2%',
    paddingBottom:'4%',
    backgroundColor:'transparent',
  },
  bottomToolBar:{
    display: 'flex',
    alignItems:'center',
    height:'12%',
    paddingLeft:'2%',
    paddingRight:'2%',
    paddingTop:'4%',
    backgroundColor:'transparent',
  },
  chip: {
    margin: '1%',
    backgroundColor: 'white',
  },
  heartIcon:{
    color: pink[500],
  },
  todayIcon:{
    color: indigo[500],
  },
  grow: {
    flexGrow: 1,
  },
  outerBorder:{
    padding: '2%',
    borderColor: '#fffff',
  },
  innerBorder:{
  },
    t0:{
      padding: '1%',
      backgroundColor: '#ffffff'
    },
    t1:{
      padding: '1%',
      backgroundColor: grey['400']
    },
    t2:{
      padding: '1%',
      backgroundColor: lightGreen['A700']
    },
    t3:{
      padding: '1%',
      backgroundColor: indigo['A700']
    },
    t4:{
      padding: '1%',
      backgroundColor: deepPurple['A700']
    },
    t5:{
      padding: '1%',
      backgroundColor: orange['A400']
    },
}))


export default withStyles(styles)(({classes, ...props}) => {
  const borderTier = (tier) => {
    switch (tier) {
      case 1:
        return classes.t1
      case 2:
        return classes.t2
      case 3:
        return classes.t3
      case 4:
        return classes.t4
      case 5:
        return classes.t5
    
      default:
        return classes.t0
    }
  }

  // MUI uses integer values for progress
  const progress = (cur,max) => {
    return Math.floor((cur/max) * 100)
  }

  return(
    <Card className={classes.card}  elevation={7}>
      <Paper className={borderTier(props.tier)}>

      <CardActionArea
        onClick={props.action}
      >
        <CardContent className={classes.overlayBox}>
          <Typography className={classes.headerText} variant="h6">{props.name}</Typography>
          <Grid container spacing={1}>
            <Grid item>
              <LinearProgress variant="determinate" value={progress(props.clicks,props.clicksToLevel)}/>
              <Typography className={classes.headerText} variant="h6">Click Progress</Typography>
            </Grid>
            <Grid item>
              <LinearProgress variant="determinate" value={progress(props.clicks,props.clicksToLevel)}/>
              <Typography className={classes.headerText} variant="h6">Level Progress</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardMedia>
          <Moose />
        </CardMedia>
      </CardActionArea>
      </Paper>
    </Card>
  )
})

