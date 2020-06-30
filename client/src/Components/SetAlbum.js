import React, { useContext } from 'react';
import { AppContext } from '../Providers/AppProvider'

import { withStyles } from '@material-ui/styles'

import Paper from '@material-ui/core/Paper'

import SetPage from './SetPage'


const styles = (theme => ({
  main:{
    maxHeight: 'calc(100vh - 84px)',
    overflow: 'auto',
  },
}))

const SetAlbum = withStyles( styles )(({ classes, ...props }) => {
  const { setDefinitions, fetchSetDefinitions } = useContext( AppContext )

  return(
    <Paper className={classes.main}>
      { 
        setDefinitions.map( definition => 
          <SetPage
            key={ definition.id }
            name={ definition.name }
            requirements={ definition.requirements }
            serializedReqs={ definition.serializedReqs }
          />
        )
      }
    </Paper>
  )
})

export default SetAlbum