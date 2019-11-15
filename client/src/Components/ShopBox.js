import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper'



import {ReactComponent as Placeholder} from '../Icons/Moose_loose.svg'


const styles = (theme =>(
  {
    gridList:{
      height:'600px'
    },
    subheader:{

    },
    header:{
      marginBottom:'20px'
    },
    item:{
      cursor: 'pointer',
    },
    cardMedia:{
      alignItems:'center',
      justifyContent:'center',
    },
    paper:{
      backgroundColor: theme.palette.background.paper,
      border: theme.palette.background.border,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: theme.palette.background.borderRadius,
      outline: 'none',
    }

  }
))

export default withStyles(styles)(({classes}) => {

  const tempPointsPackArray = [
    {itemName: '1000 MoosePoints', desc:'', price:'1.00'},
    {itemName: '3000 MoosePoints', desc:'', price:'3.00'},
    {itemName: '5000 MoosePoints', desc:'', price:'5.00'},
    {itemName: '10000 MoosePoints', desc:'', price:'10.00'},
    {itemName: '25000 MoosePoints', desc:'', price:'25.00'},
    {itemName: '50000 MoosePoints', desc:'', price:'50.00'},
    {itemName: '75000 MoosePoints', desc:'', price:'75.00'},
    {itemName: '100000 MoosePoints', desc:'', price:'100.00'},
  ]

  const tempArray = [
    {itemName:'Standard Moose', desc: 'A standard moose.', price:1000},
    {itemName:'Mega Moose', desc: 'Five times larger than a standard moose.', price:2000},
    {itemName:'Bog Standard Moose', desc: 'A standard moose native to boggy areas.', price:1500},
    {itemName:'Mangy Moose', desc: 'This moose has quite a bit of mange', price:1000},
    {itemName:'Darling Moose', desc: 'The most darling moose.', price:3000},
    {itemName:'', desc: '', price:0},
    {itemName:'', desc: '', price:0},
    {itemName:'', desc: '', price:0},
  ]

  return(
    <Paper>
      <GridList cellHeight={150} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader className={classes.subheader} component="div" color="inherit">Points Packs!</ListSubheader>
        </GridListTile>
          {tempPointsPackArray.map(item=>
            <GridListTile className={classes.item} onClick={()=>alert('click')}>
              <Placeholder />
              <GridListTileBar 
                title={item.itemName}
                subtitle={<span>Price: ${item.price}</span>}
              />
            </GridListTile>
          )}
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader className={classes.subheader} component="div" color="inherit">New Moose!</ListSubheader>
        </GridListTile>
          {tempArray.map(item=>
            <GridListTile className={classes.item} onClick={()=>alert('click')}>
              <Placeholder />
              <GridListTileBar 
                title={item.itemName}
                subtitle={<span>Price: {item.price} MP</span>}
              />
            </GridListTile>
          )}
      </GridList>
    </Paper>
  )
})