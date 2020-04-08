import React, {useContext} from 'react';
import { withStyles } from '@material-ui/core/styles';

import { AppContext } from '../Providers/AppProvider'

import Grid from '@material-ui/core/Grid'
import Grow from '@material-ui/core/Grow'
import Button from '@material-ui/core/Button'

import Droppable from './Droppable'
import Draggable from './Draggable'
import Collectible from './Collectible'


const styles = (theme=>({
  dropZone:{
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  grid: {
    padding: '20px'
  }
}))

  // linearly stagger drawing the cards
  const delay = (step,interval) => {
    let base = 200;
    return `${base + (interval * (step - 1))}ms`
  }



const HandBuilder = withStyles(styles)(({ classes }) => {
  const { hand, clearHand } = useContext(AppContext)

  const clearButton = (
    hand.length > 0 && 
    <Button variant="contained" onClick={clearHand}>
      Clear items
    </Button>
  )

return(
  <>
    <Grid className={ classes.grid } container alignItems='center' justifyItems='center' spacing={1}>
      {hand.map((item,i) =>
        <Grow key={ item.id } in={true} style={{ transitionDelay: delay(i,100)}}>
          <Grid item xs={12} sm={6} md={1} lg={2}>
            <Draggable>
              <Collectible 
                id={ item.id }
                className={ classes.item } 
                name={ item.name } 
                level={ item.level } 
                tier={ item.tier }
                clicks={ item.clicks } 
                clicksToLevel={ item.clicksToLevel } 
                artist={ item.artist }
                created_at={ item.created_at }
              />
            </Draggable>
          </Grid>
        </Grow>
      )}
    </Grid>
    {clearButton}
    </>
)
})

export default HandBuilder