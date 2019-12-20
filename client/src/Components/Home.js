import React, {useContext, useState} from 'react';
import {AuthContext} from '../Providers/AuthProvider'

// Material UI 
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ToolBar from '@material-ui/core/ToolBar'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// Mooseclicker components
import Collectible from './Collectible'
import ShopBox from './ShopBox'
import Collection from './Collection'

const styles = (theme => (
  {
    displayArea:{},
    grid:{
      flexWrap: 'wrap',
      padding: '10px',
    },
    shopPanel:{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    activeCollectible:{
    },
    toolBar:{
      minHeight:"32px",
    },
    collection:{
    }
  }
  ))

  function tabProps(index) {
    return {
      id: `wrapped-tab-${index}`,
      'aria-controls': `wrapped-tabpanel-${index}`,
    };
  }

export default withStyles(styles)(({classes}) => { 
  const {authenticated} = useContext(AuthContext)
  const [tab, setTab] = useState(0)


  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  const main = (
    <Grid container direction="row">
      <Grid item xs="auto" lg={3} />
      <Grid item xs={12} lg={6}>
        <Collectible className={classes.activeCollectible}/>
      </Grid>
      <Grid item xs="auto" lg={3} />
    </Grid>
  )

  const display = (tab) => {
    switch(tab){
      case 0:
        return main
        break
      case 1:
        return <Collection className={classes.collection} />
        break
      default:
        return main
    }
  }

  return(
    <>
      <Grid
        className={classes.grid}
        container
        direction="row"
        spacing={3}
      >
        <Grid item xs={12} lg={8}>
          <ToolBar className={classes.toolBar}>
          <Tabs value={tab} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Main" {...tabProps(0)} />
            {
              authenticated && <Tab label="Collection" {...tabProps(1)} />
            }
          </Tabs>
          </ToolBar>
            {display(tab)}
        </Grid>  
        <Grid item xs={12} lg={4}>
          <ShopBox className={classes.shopPanel}/>
        </Grid>
      </Grid>
    </>
  )
})

