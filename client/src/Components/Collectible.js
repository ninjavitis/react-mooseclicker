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


// Other Imports
import {ReactComponent as Moose} from '../Icons/Moose_loose.svg'


const styles = (theme => ({
  card:{
  },
  cardText:{
    fontSize: 16,
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
    padding: '10px'
  },
  t2: {
    backgroundColor: teal['A200'],
  }, 
  t3: {
    backgroundColor: indigo['A200'],
  }, 
}))


export default withStyles(styles)(({classes, ...props}) => {
  return(

    <Card  className={classes.card} variant='outlined' elevation={10}>
      <Paper className={classes.outerBorder} >
        <Paper className={`${classes.innerBorder} ${classes.t3}`}>
          <Paper className={classes.toolBar} elevation={0}>
            <Typography className={classes.cardText} variant="h6">{props.name}</Typography>
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

