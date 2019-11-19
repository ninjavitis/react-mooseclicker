import React, {useState} from 'react';

import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ToolBar from '@material-ui/core/ToolBar'
import Paper from '@material-ui/core/Paper'
import {ReactComponent as Placeholder} from '../Icons/Moose_loose.svg'
import deepPurple from '@material-ui/core/colors/deepPurple';




const styles = (theme =>(
  {
    gridList:{
      height:'680px'
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
    },
    activeTab:{
      backgroundColor: deepPurple[500],
    }

  }
))

export default withStyles(styles)(({classes}) => {
  const [shop, setShop] = useState(0)
  const [value, setValue] = useState('')

  const [shopSettings, setShopSettings] = useState(
      [
        {name:'Moose Shop'},
        {name:'Points Shop'},
      ]
    )

  const tempPointsPackArray = [
    {itemName: 'Get 1000 MoosePoints!', desc:'', price:'1.00'},
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
    {itemName:'Limited Edition Moose', desc: 'A limted edition moose.', price:5000},
    {itemName:'Mega Moose', desc: 'Five times larger than a standard moose.', price:2000},
    {itemName:'Bog Standard Moose', desc: 'A standard moose native to boggy areas.', price:1500},
    {itemName:'Mangy Moose', desc: 'This moose has quite a bit of mange', price:1000},
    {itemName:'Darling Moose', desc: 'The most darling moose.', price:3000},
    {itemName:'', desc: '', price:0},
    {itemName:'', desc: '', price:0},
    {itemName:'', desc: '', price:0},
  ]

  const shopItems =[
    {items:tempPointsPackArray, currency:'$'},
    {items:tempArray, currency:'MP '},
  ]

  return(
    <>
        <ToolBar>
          <Tabs value={value}>
            <Tab label='Points Shop' onClick={(e)=>setShop(0)} id='tab_1'/>
            <Tab label='Moose Shop' onClick={(e)=>setShop(1)} />
          </Tabs>
        </ToolBar>
      <Paper>
        <GridList cellHeight={180} className={classes.gridList}>
            {shopItems[shop].items.map(item=>
              <GridListTile className={classes.item} onClick={()=>alert('click')}>
                <Placeholder />
                <GridListTileBar 
                  title={item.itemName}
                  subtitle={<span>{shopItems[shop].currency}{item.price}</span>}
                />
              </GridListTile>
            )}
          </GridList>
        </Paper>
      </>
    )
})