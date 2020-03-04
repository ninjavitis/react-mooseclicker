import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider'
import { AppContext } from '../Providers/AppProvider'
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ToolBar from '@material-ui/core/Toolbar'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

import Collectible from './Collectible'

const styles = (theme =>(
  {
    gridList:{
      height:'500px',
    },
    item:{
      
    },
    toolbar:{
      minHeight:'4vh',
    },
    formControl:{
      margin: theme.spacing(2),
    }
  }
))

export default withStyles(styles)(({items, classes}) => {
  const {authenticated} = useContext(AuthContext)
  const { collection, fetchCollection, updateActiveCollectible } = useContext(AppContext)

  const [localCollection, setLocalCollection] = useState(collection)
  const [sortBy1, setSortBy1] = useState('created_at')
  const [sortBy2, setSortBy2] = useState('level')
  const [sortDirection, setSortDirection] = useState(-1)
  
  useEffect(()=>{
    if (authenticated && collection.length === 0){
      fetchCollection()
    }
  },[authenticated])

  // useEffect(()=>{
  //   sortCollection(localCollection)
  // },[sortBy1,sortBy2,sortDirection])
  
  const handleSortBy1Change = e =>{
    setSortBy1(e.target.value)
  }

  const handleSortBy2Change = e =>{
    setSortBy2(e.target.value)
  }
  
  const handleDirectionChange = (e) => {
    setSortDirection(e.target.value)
  }

  const sortCollection = (list) => {
    list.sort((item1,item2) => {
      if(typeof item1[sortBy1] == "number"){
        return(
          (item1[sortBy1] - item2[sortBy1]) * sortDirection
        )
      } else {
        return(
          (item1[sortBy1] < item2[sortBy1]) ? -1 * sortDirection: ((item1[sortBy1] > item2[sortBy1]) ? 1 * sortDirection : 0)
        )
      }
    })
  }

  const delay = (step,interval) => {
    let base = 200;
    // linear stagger drawing the cards
    return `${base + (interval * (step - 1))}ms`
  }

  const sortByItems = [
      <MenuItem value={'name'}>Name</MenuItem>,
      <MenuItem value={'created_at'}>Age</MenuItem>,
      <MenuItem value={'clicks'}>Clicks</MenuItem>,
      <MenuItem value={'level'}>Level</MenuItem>,
  ]

  const sortDirections = [
      <MenuItem value={1}>Ascending</MenuItem>,
      <MenuItem value={-1}>Descending</MenuItem>
  ]

  const Main = () => {
    if (collection.length > 0) {
      return (
        <>
          <ToolBar className={classes.toolbar}>
            <FormControl className={classes.formControl}>
              <InputLabel id="sort-by">Sort By</InputLabel>
              <Select 
                labelId="sort-by"
                className={classes.selection}
                value={sortBy1}
                onChange={handleSortBy1Change}
              >
                {sortByItems}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="sort-direction">Sort Direction</InputLabel>
              <Select 
                labelId="sort-direction"
                className={classes.selection}
                value={sortDirection}
                onChange={handleDirectionChange}
              >
                {sortDirections}
              </Select>
            </FormControl>
          </ToolBar>
          <Grid container spacing={1}>
            {collection.map((item,i) =>
              <Grow in={true} style={{ transitionDelay: delay(i,100)}}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Collectible 
                className={classes.item} 
                key={item.id} 
                name={item.name} 
                level={item.level} 
                tier={item.tier}
                clicks={item.clicks} 
                clicksToLevel={item.clicksToLevel} 
                artist={item.artist}
                created_at={item.created_at}
                action={()=>updateActiveCollectible(item.id)}
              />
            </Grid>
            </Grow>
            )}
          </Grid>
        </>
      )
    } else {
      return(
        <Typography>Loading Collection...</Typography>
      )
    }
  }

  return(
    <Paper>
      <Main />
    </Paper>
  )
})
