// React Imports
import React, {useContext, useEffect} from 'react';
import {AuthContext} from '../Providers/AuthProvider'
import {AppContext} from '../Providers/AppProvider'

// Material UI Imports
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Paper from '@material-ui/core/Paper'
import ToolBar from '@material-ui/core/ToolBar'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite';
import teal from '@material-ui/core/colors/teal'
import cyan from '@material-ui/core/colors/cyan'
import blue from '@material-ui/core/colors/blue'
import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'


// Other Imports
import {ReactComponent as Moose} from '../Icons/Moose_loose.svg'


const styles = (theme => ({

  card: {
    padding:'5px',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: indigo[600],
  },
  center: {
    alignItems:'center',
    justifyContent:'center',
    justify:'center',
    margin:'auto'
  },
  toolBar:{
    minHeight:'32px',
 
  },
  chip: {
    margin: theme.spacing(1)
  },
  heartIcon:{
    color: pink[500],
  },
  grow: {
    flexGrow: 1,
  },
  cardTitle :{
    fontSize: '18px'
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
  const {authenticated,  updateUser} = useContext(AuthContext)

 
  return(
  <Paper className={classes.outerBorder} elevation={10}>
    <Paper className={`${classes.innerBorder} ${classes.t3}`} elevation={0}>
      <Card className={classes.card} variant='outlined' elevation={0}>
        <ToolBar className={classes.toolBar}>
          <Typography className={classes.cardTitle} variant="h6">{props.name}</Typography>
        <Chip 
            variant="outlined"
            avatar={<Avatar>LV</Avatar>}
            label={props.level}
            className={classes.chip}
          />
          <Chip 
            variant="outlined"
            icon={<FavoriteIcon className={classes.heartIcon}/>}
            label={props.clicks + ' / ' + props.clicksToLevel}
            className={classes.chip}
          />
        </ToolBar>
        <CardActionArea
          onClick={props.action}
        >
          <CardMedia>
            <Moose />
          </CardMedia>
        </CardActionArea>
        <CardContent>
          {props.artist}
        </CardContent>
      </Card>
      </Paper>
    </Paper>
  )
})

