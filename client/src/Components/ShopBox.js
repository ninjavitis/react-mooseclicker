import React, {useState} from 'react';

import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ToolBar from '@material-ui/core/ToolBar'
import Paper from '@material-ui/core/Paper'
import {ReactComponent as Placeholder} from '../Icons/Moose_loose.svg'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import ShopItem from './ShopItem'

const styles = (theme =>(
  {
    gridList:{
      height:'630px'
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
  }
))

export default withStyles(styles)(({classes}) => {
  const [shopIndex, setShopIndex] = useState(0)
  const [value, setValue] = useState('')

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
  ]

  const tempClickPacks = [
    {itemName:'5 Clicks', desc: '', price:700},
    {itemName:'10 Clicks', desc: '', price:1000},
    {itemName:'20 Clicks', desc: '', price:1900},
    {itemName:'50 Clicks', desc: '', price:4500},
    {itemName:'100 Clicks', desc: '', price:9500},
    {itemName:'200 Clicks', desc: '', price:18000},
    {itemName:'500 Clicks', desc: '', price:37000},
    {itemName:'1000 Clicks', desc: '', price:70000},
    {itemName:'5000 Clicks', desc: '', price:300000},
  ]

  const shopItems =[
    {name:'Points Shop', items:tempPointsPackArray, currency:'$'},
    {name:'Moose Shop', items:tempArray, currency:'MP '},
    {name:'Clicks Shop', items:tempClickPacks, currency:'MP '}
  ]

  return(
    <>
      <ToolBar>
        <Grid
          className={classes.grid}
          container
          direction="row"
          spacing={5}
        >
          {shopItems.map((shop,i) =>
            <Grid item xs={4} lg={4}>
              <Button onClick={(e)=>setShopIndex(i)} size={'small'}>{shop.name}</Button>
            </Grid>
          )}
        </Grid>
      </ToolBar>
    <Paper>
      <GridList cellHeight={10} className={classes.gridList}>
          {shopItems[shopIndex].items.map(item=>
            <ShopItem name={item.name} currency={shopItems[shopIndex].currency} price={item.price} />
            // <GridListTile className={classes.item} onClick={()=>alert('click')}>
            //   <Placeholder />
            //   <GridListTileBar 
            //     title={item.itemName}
            //     subtitle={<span>{shopItems[shopIndex].currency}{item.price}</span>}
            //   />
            // </GridListTile>
          )}
        </GridList>
      </Paper>
    </>
  )
})