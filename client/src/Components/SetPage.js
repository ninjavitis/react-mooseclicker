import React, { useState, useContext } from 'react';

import { AppContext } from '../Providers/AppProvider'

import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

import CardDropZone from './CardDropZone'
import Droppable from './Droppable'
import CollectibleSM from './CollectibleSM'

const styles = (theme =>({
  setPage:{
    maxHeight: 'calc(100vh - 128px)',
    overflow: 'auto',
    margin: theme.spacing(2),
  },
  setTitle:{
    padding: theme.spacing(1),

  },
  setBody:{
    display: 'flex',
    padding: theme.spacing(1),
    justifyItems: 'center',
    alignItems: 'center',
  },
  setTab:{
    height:'100%'
  },
  grid:{
    margin: theme.spacing(2)
  }
}))

const SetPage = withStyles(styles)(({classes, ...props})=> {
  const { collection } = useContext( AppContext )

  const [complete, setComplete] = useState( false ) 
  const [setSize, setSetSize] = useState( 5 ) // temp for testing
  const [items, setItems] = useState( [] )

  // Gather all of the type requirements for this set
  const types = props.requirements.map( req => req.type)

  const inItems = (itemID) => Boolean(items.find(({id}) => id === itemID))

  const addToSet = ( res ) => {
    if (!inItems(res.id)){ 
      setItems(items => [res, ...items])
    } else {
      return
    }

    setComplete(checkRequirements(props.requirements))
  }

  // Build the set dropzones
  // const dropZones = []
  // props.requirements.map( req  => {
  //     for (var j = 0; j < req.quantity; j++) {
  //       dropZones.push(
  //         <Grid item>
  //           <CardDropZone type={req.type}/>
  //         </Grid>
  //       )
  //     }
  //   })


  // returns true if all requirements are met
  const checkRequirements = (requirements) => {
    for (const req in requirements){
      for (const item in items){
        let match = false
        if (item.type !== req.type){
          console.log('nomatch')
          return false
        } else {
          match = true
        }
        console.log('match')
        return match
      }
    }
  }

  const dropZones = (
    props.requirements.map( (req, i) => 
      <Grid item>
        {items[i] ? <CollectibleSM item={ items[i] } /> : <CardDropZone type={req.type} />}
      </Grid>
    )
  )

  return(
    <Paper className={classes.setPage}>
      <div className={classes.setTitle}>{props.name}</div>
        <Paper className={classes.setBody}>
          {complete? <StarRoundedIcon style={{color:'#fce205'}} fontSize={'large'}/> : <StarBorderRoundedIcon style={{color:'#999999'}} fontSize={'large'}/> }
          <Droppable types={ types } onDrop={ addToSet }>
            <Grid container>
              {dropZones}
            </Grid>
          </Droppable>
        </Paper>
    </Paper>
  )
})




export default SetPage