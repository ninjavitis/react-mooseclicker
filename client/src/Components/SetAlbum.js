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
  const { sets } = useContext( AppContext )

  return(
    <Paper className={classes.main}>
      { 
        sets.map( set => 
          <SetPage
            key={ set.id }
            name={ set.name }
            requirements={ set.requirements }
          />
        )
      }
    </Paper>
  )
})

export default SetAlbum