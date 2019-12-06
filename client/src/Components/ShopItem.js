import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { withStyles } from '@material-ui/core/styles';
import {ReactComponent as Placeholder} from '../Icons/Moose_loose.svg'


const styles = (theme =>(
  {
    item:{
      cursor: 'pointer',
    },
  }
))

export default withStyles(styles)(({name, currency, price, classes}) => {
  return(
    <GridListTile className={classes.item} onClick={()=>alert('click')}>
      <Placeholder />
      <GridListTileBar 
        title={name}
        subtitle={<span>{currency}{price}</span>}
      />
    </GridListTile>
  )
})