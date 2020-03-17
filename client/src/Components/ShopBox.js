import React, {useState, useContext, useEffect} from 'react'
import {AppContext} from '../Providers/AppProvider'
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import ToolBar from '@material-ui/core/ToolBar'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShopTab from './ShopTab'

//TODO remove imports once grid item size is resolved
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import {ReactComponent as Placeholder} from '../Icons/Moose_loose.svg'

import StyledReactBuyButton from './shopify/ReactBuyButton'


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
  const {
    newCollectible, 
    inventories,
    shopify,
    shops
  } = useContext(AppContext)

  const [client, setClient] = useState({})
  const [ui, setUI] = useState({})
  
  
  const shopifyProduct = () => {
    let client = window.ShopifyBuy.buildClient({
      domain: shopify.domain,
      storefrontAccessToken: shopify.storefrontAccessToken,
    });

    let ui = window.ShopifyBuy.UI.init(client)

    ui.createComponent('product', {
      id: '4618152673411',
      node: document.getElementById('product-component-1583776071693'),
      moneyFormat: '%24%7B%7Bamount%7D%7D',
    })
  }

  const [shopIndex, setShopIndex] = useState(0)

  // handles tab switching
  const handleChange = (e, newTab) => {
    setShopIndex(newTab);
  };

  function tabProps(index) {
    return {
      id: `wrapped-tab-${index}`,
      'aria-controls': `wrapped-tabpanel-${index}`,
    };
  }

  const ShopItems = () => {
    const items = shops[shopIndex].items

    if (items > 0){
      return(
        items.map((item,i) => 
          <GridListTile key={item.id} className={classes.item}>
            <Placeholder />
            <GridListTileBar 
              title={item.name}
              subtitle={<span>{shops[shopIndex].curr} {item.price || '9999.99'}</span>}
            />
          </GridListTile>
        )
      )
    }
  }


  return(
    <>
      <ToolBar>
        <Tabs value={shopIndex} onChange={handleChange} aria-label="simple tabs example">
          {shops.map((shop,i) => 
            <Tab label={shop.name} {...tabProps(i)} />
          )}
        </Tabs>
      </ToolBar>
      <GridList cellHeight={'auto'} className={classes.gridList} cols={5}>
      {shops[shopIndex].items.map((item,i) =>
            // TODO enable this once grid list item size issue is resolved
            // <ShopItem name={item.item.name} currency={shops[shopIndex].currency} price={item.price || '9999.99'} cols={1}/>
            
            // TODO remove this once grid list item size issue is resolved
            <GridListTile key={item.id} className={classes.item}>
              <Placeholder />
              <GridListTileBar 
                title={item.name}
                subtitle={<span>{shops[shopIndex].curr} {item.price || '9999.99'}</span>}
              />
              {
              shopifyProduct
              }
            </GridListTile>
          )}
      </GridList>
    </>
  )
})