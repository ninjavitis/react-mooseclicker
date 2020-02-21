import React, {useState, useContext, useEffect} from 'react'
import {AppContext} from '../Providers/AppProvider'
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import ToolBar from '@material-ui/core/ToolBar'
import Paper from '@material-ui/core/Paper'
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

export default withStyles(styles)(({classes, ...props}) => {

  // const shopTile = (id, name, price, currency) => {
  //   return(
  //     <GridListTile key={id} className={classes.item} onClick={()=>console.log(id)}>
  //       <Placeholder />
  //       <GridListTileBar 
  //         title={name}
  //         subtitle={<span>{currency}{price || '9999.99'}</span>}
  //       />
  //     </GridListTile>
  //   )
  // }

  return(
    <Paper>
      <GridList cellHeight={150} className={classes.gridList} cols={2}>
          {props.items.map((item,i) =>
            // TODO enable this once grid list item size issue is resolved
            // <ShopItem name={item.item.name} currency={shops[shopIndex].currency} price={item.price || '9999.99'} cols={1}/>
            
            // TODO remove this once grid list item size issue is resolved
            <GridListTile key={item.id} className={classes.item} >
              <Placeholder />
              <GridListTileBar 
                title={item.name}
                subtitle={<span>{item.price}</span>}
              />
            </GridListTile>
          )}
        </GridList>
      </Paper>
  )
})