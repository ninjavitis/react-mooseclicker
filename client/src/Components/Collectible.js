// React Imports
import React from 'react';


// Material UI Imports
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite';
import teal from '@material-ui/core/colors/teal'
import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'
import purple from '@material-ui/core/colors/purple'
import deepPurple from '@material-ui/core/colors/deepPurple'
import lightGreen from '@material-ui/core/colors/lightGreen'
import orange from '@material-ui/core/colors/orange'
import grey from '@material-ui/core/colors/grey'


// Other Imports
import {ReactComponent as Moose} from '../Icons/Moose_loose.svg'


const styles = (theme => ({
  card:{
  },
  cardNameBackground:{
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  cardText:{
    fontSize: 14,
  },
  center: {
    alignItems:'center',
    justifyContent:'center',
    justify:'center',
    margin:'auto'
  },
  toolBar:{
    display: 'flex',
    alignItems:'center',
    height:'30px',
    paddingLeft:'5px',
    paddingRight:'5px',
    paddingBottom:'10px',
    backgroundColor:'transparent',
 
  },
  chip: {
    margin: '2px',
    backgroundColor: 'white',
  },
  heartIcon:{
    color: pink[500],
  },
  grow: {
    flexGrow: 1,
  },
  outerBorder:{
    padding: '10px',
    borderColor: '#fffff',
  },
  innerBorder:{
  },
    t0:{
      padding: '10px',
      backgroundColor: '#ffffff'
    },
    t1:{
      padding: '10px',
      backgroundColor: grey['400']
    },
    t2:{
      padding: '10px',
      backgroundColor: lightGreen['A700']
    },
    t3:{
      padding: '10px',
      backgroundColor: indigo['A700']
    },
    t4:{
      padding: '10px',
      backgroundColor: deepPurple['A700']
    },
    t5:{
      padding: '10px',
      backgroundColor: orange['A400']
    },
}))


export default withStyles(styles)(({classes, ...props}) => {
  const borderTier = (tier) => {
    switch (tier) {
      case 1:
        return classes.t1
        break;
      case 2:
        return classes.t2
        break;
      case 3:
        return classes.t3
        break;
      case 4:
        return classes.t4
        break;
      case 5:
        return classes.t5
        break;
    
      default:
        return classes.t0
        break;
    }
  }

  return(
    <Card  className={classes.card} variant='outlined' elevation={7}>
      <Paper className={classes.outerBorder} >
        <Paper className={borderTier(props.tier)}>
          <Paper className={classes.toolBar} elevation={0}>
            <Paper className={classes.cardNameBackground} elevation={5}>
              <Typography className={classes.cardText} variant="h6">{props.name}</Typography>
            </Paper>
            <div className={classes.grow}/>
            <Chip 
              variant="outlined"
              avatar={<Avatar>LV</Avatar>}
              label={props.level}
              className={classes.chip}
            />
            <Chip 
              variant="outlined"
              icon={<FavoriteIcon className={classes.heartIcon}/>}
              label={props.clicks + ' / ' + (props.clicksToLevel || '-')}
              className={classes.chip}
            />
          </Paper>
          <CardActionArea
            onClick={props.action}
          >
            <CardMedia>
              <Moose />
            </CardMedia>
          </CardActionArea>
          <CardContent>
            <Typography className={classes.cardText}>
              {props.artist}
            </Typography>
          </CardContent>
        </Paper>
      </Paper>
    </Card>
  )
})

