import React, {useState, useContext, useEffect} from 'react'
import {ShopContext} from '../Providers/ShopProvider'
import {AppContext} from '../Providers/AppProvider'

import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import ToolBar from '@material-ui/core/ToolBar'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

//TODO remove imports once grid item size is resolved
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import {ReactComponent as Placeholder} from '../Icons/Moose_loose.svg'


const styles = (theme =>(
  {
    gridList:{
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
  const {newCollectible, fetchCollectibles, wrappedCollectibles} = useContext(ShopContext)
  const {fetchCollection} = useContext(AppContext)


  const [shopIndex, setShopIndex] = useState(0)
  const [tab, setTab] = useState(0)

  // handles tab switching
  const handleChange = (e, newTab) => {
    setTab(newTab);
  };

  useEffect(()=>{
    fetchCollectibles()
  },[])

  const tempPointsPackArray = [
    {item:{id:1,name:'Get 1000 MoosePoints!', description:'', imageURL:''},price:'1.00'},
    {item:{id:2,name:'Get 3000 MoosePoints!', description:'', imageURL:''},price:'3.00'},
    {item:{id:3,name:'Get 5000 MoosePoints!', description:'', imageURL:''},price:'5.00'},
    {item:{id:4,name:'Get 10000 MoosePoints!', description:'', imageURL:''},price:'10.00'},
    {item:{id:5,name:'Get 25000 MoosePoints!', description:'', imageURL:''},price:'25.00'},
    {item:{id:6,name:'Get 50000 MoosePoints!', description:'', imageURL:''},price:'50.00'},
    {item:{id:7,name:'Get 75000 MoosePoints!', description:'', imageURL:''},price:'75.00'},
    {item:{id:8,name:'Get 100000 MoosePoints!', description:'', imageURL:''},price:'100.00'},
  ]



  const tempClickPacks = [
    {item:{id:1,name:'5 Clicks', description:''}, price:700},
    {item:{id:2,name:'10 Clicks', description:''}, price:1000},
    {item:{id:3,name:'20 Clicks', description:''}, price:1900},
    {item:{id:4,name:'50 Clicks', description:''}, price:4500},
    {item:{id:5,name:'100 Clicks', description:''}, price:9500},
    {item:{id:6,name:'200 Clicks', description:''}, price:18000},
    {item:{id:7,name:'500 Clicks', description:''}, price:37000},
    {item:{id:8,name:'1000 Clicks', description:''}, price:70000},
    {item:{id:9,name:'5000 Clicks', description:''}, price:300000},
  ]

  const shops =[
    {name:'Points Shop', items:tempPointsPackArray, currency:'$'},
    {name:'Collectibles Shop', items:wrappedCollectibles, currency:'MP '},
    {name:'Clicks Shop', items:tempClickPacks, currency:'MP '}
  ]

  const handleClick = (shopId, itemId) => {
    
    switch (shopId){
      case 0: 
        return
      case 1: 
        newCollectible(itemId)
        fetchCollection()
        break
      case 2:
        return
    }
  }

  const display = (tab) => {
    switch(tab){
      case 0:
        return 
      case 1:
        return 
      case 2:
        return 
      default:
        return 
    }
  }

  function tabProps(index) {
    return {
      id: `wrapped-tab-${index}`,
      'aria-controls': `wrapped-tabpanel-${index}`,
    };
  }


  const shopTile = (id, name, price, currency) => {
    return(
      <GridListTile key={id} className={classes.item} onClick={()=>console.log(id)}>
        <Placeholder />
        <GridListTileBar 
          title={name}
          subtitle={<span>{currency}{price || '9999.99'}</span>}
        />
      </GridListTile>
    )
  }

  return(
    <>
      <ToolBar>
        <Tabs value={tab} onChange={handleChange} aria-label="simple tabs example">
          {shops.map((shop,i) => 
            <Tab label={shop.name} {...tabProps(i)} />
          )}
        </Tabs>
      </ToolBar>
    <Paper>
      <GridList cellHeight={150} className={classes.gridList} cols={2}>
          {shops[tab].items.map((item,i) =>
            // TODO enable this once grid list item size issue is resolved
            // <ShopItem name={item.item.name} currency={shops[shopIndex].currency} price={item.price || '9999.99'} cols={1}/>
            
            // TODO remove this once grid list item size issue is resolved
            <GridListTile key={item.item.id} className={classes.item} onClick={()=>handleClick(shopIndex,item.item.id)}>
              <Placeholder />
              <GridListTileBar 
                title={item.item.name}
                subtitle={<span>{shops[shopIndex].currency}{item.price || '9999.99'}</span>}
              />
            </GridListTile>
          )}
        </GridList>
      </Paper>
    </>
  )
})