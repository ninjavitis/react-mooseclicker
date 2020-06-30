import React, {useContext, useState} from 'react';
import { withStyles } from '@material-ui/core/styles';

import { AppContext } from '../Providers/AppProvider'

import Grid from '@material-ui/core/Grid'
import Grow from '@material-ui/core/Grow'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'

import Droppable from './Droppable'
import Draggable from './Draggable'
import Collectible from './Collectible'
import CollectibleSM from './CollectibleSM'


const styles = (theme=>({
  dropZone:{
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  main:{
    padding: '0px 20px'
  },
  toolbar:{
    minHeight:'4vh',
    margin: theme.spacing(2)
  },
}))

  // linearly stagger drawing the cards
  const delay = (step,interval) => {
    let base = 0;
    return `${base + (interval * (step - 1))}ms`
  }

const HandBuilder = withStyles(styles)(({classes}) => {
  const { hand, checkHand, clearHand, sets, validSets, } = useContext(AppContext)

  const clearButton = (
    hand.length > 0 && 
    <Button variant="contained" onClick={clearHand}>Clear items</Button>
  )

  const checkHandButton = (
    <Button variant="contained" onClick={checkHand}>Check Hand</Button>
  )
  
return(
  <div className={ classes.main }>
      Add cards to the dropzone below to start building a set!
    <Grid container alignItems='center' justifyItems='center' spacing={1}>
      {hand.map((item,i) =>
        <Grow key={ item.id } in={ true } style={{ transitionDelay: delay(i,50)}}>
          <Grid item xs={12} sm={6} md={1} lg={2}>
            <CollectibleSM
              item={item}
            />
          </Grid>
        </Grow>
      )}
    </Grid>
    {validSets.map(validSet => <div>{sets[validSet].name}</div>)}
    <Toolbar className={ classes.toolbar }>
      {clearButton}
      {hand.length > 1 && checkHandButton}
    </Toolbar>
    </div>
)
})

export default HandBuilder