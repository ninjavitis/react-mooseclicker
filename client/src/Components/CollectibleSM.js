// React Imports
import React, { useState } from 'react';

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
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'

// Colors
import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'

// Icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import TodayIcon from '@material-ui/icons/Today';

// Other Imports
import {ReactComponent as Image} from '../Icons/placeholder_400_400.svg'


const styles = (theme => ({
  card:{
    flexGrow:1
  },
  cardNameBackground:{
    paddingLeft: '4%',
    paddingRight: '5%',
  },
  cardText:{
      fontSize: 8
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
  outerBorderSelected:{
    padding: '3%',
    backgroundColor: '#000000',
  },
  outerBorderDeselected:{
    padding: '3%',
    backgroundColor: '#fffff',
  },
  cardMedia: {
    width:'95%',
    margin:'auto',
  },
    t0:{
      padding: '4%',
      backgroundColor: '#ffffff'
    },
    t1:{
      padding: '4%',
      background: 'linear-gradient(45deg, #9e9e9e 30%, #f5f5f5 90%)'
    },
    t2:{
      padding: '4%',
      background: 'linear-gradient(45deg, #aeea00 30%, #f4ff81 90%)'
    },
    t3:{
      padding: '4%',
      background: 'linear-gradient(45deg, #304ffe 30%, #8c9eff 90%)'
    },
    t4:{
      padding: '4%',
      background: 'linear-gradient(45deg, #6200ea 30%, #b388ff 90%)'
    },
    t5:{
      padding: '4%',
      background: 'linear-gradient(45deg, #ffab00 30%, #ffe57f 90%)'
    },
}))


const CollectibleSM = withStyles(styles)(({classes, item, ...props,}) => {
  const [isActive] = useState(false)

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

  const elevation = (
    props.inHand? 24 : 1
  )

  const outerBorder = (inHand) => {
    if (inHand){
      return classes.outerBorderSelected
    } else {
      return classes.outerBorderDeselcted
    }
  }

  return(
    <Card className={classes.card} variant='outlined' elevation={elevation}>
      <CardActionArea
        onClick={props.action}
      >
      <Paper className={outerBorder(props.inHand)} >
        <Paper className={borderTier(item.tier)}>
          <Paper className={classes.topToolBar} elevation={0}>
            <Typography className={classes.cardText} variant="h6">{item.type}</Typography>
          </Paper>
          <CardMedia className={classes.cardMedia}>
            <Image />
          <Typography className={classes.cardText}>
            Artist: {item.artist}
          </Typography>
          <Typography className={classes.cardText}>
            <FavoriteIcon className={classes.heartIcon} fontSize='inherit'/>{item.level} {item.clicks + ' / ' + (item.clicksToLevel || '-')}
          </Typography>
          <div className={classes.grow}/>
          <Typography className={classes.cardText}>
            <TodayIcon className={classes.todayIcon} fontSize='inherit'/><Moment fromNow ago>{item.created_at}</Moment>
          </Typography>
          </CardMedia>
          </Paper>
        </Paper>
      </CardActionArea>
    </Card>
  )
})

export default CollectibleSM