import React, {useContext, useState, useEffect} from 'react';
import {AuthContext} from '../Providers/AuthProvider'
import {AppContext} from '../Providers/AppProvider'

// Material UI 
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper'

// CollectOS components
import Collectible from './Collectible'
import ShopBox from './ShopBox'
import Collection from './Collection'
import RegistrationForm from './RegistrationForm'


const styles = (theme => (
  {
    main:{
      alignItems: 'flexStart',
    },
    registrationModal:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    registrationBox: {
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
  const {authenticated, user,} = useContext(AuthContext)
  const {tab} = useContext(AppContext)
  
  const {
    activeCollectible,
    fetchActiveCollectible,
    clearCollectible,
    clickCollectible,
    collectionSize,
    fetchCollection,
    fetchItems,
  } = useContext(AppContext)

  useEffect(()=>{
    if (authenticated){
      fetchActiveCollectible()
      fetchCollection()
      fetchItems()
    } else {
      clearCollectible()
    }
  },[authenticated])

  const handleClick = () => {
    if(authenticated){
      if(user.remainingClicks > 0){
        // process the click, then update the user in the app provider
        clickCollectible()
      } else {
        alert('no clicks remaining')
      }
    } else {
      // Ask the user to register a new account
      handleModalOpen()
    }
  }

  // Registration Modal Section
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const collectionLabel = () => `Collection (${collectionSize()})`

  // prompts the user to register when default collectible is clicked
  const registerModal = (
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.registrationModal}
        open={modalOpen}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
      <Fade in={modalOpen}>
        <Paper className={classes.registrationBox}>
          <RegistrationForm handleClose={()=>handleModalClose()}/>
        </Paper>
      </Fade>
    </Modal>
  )

  const main = (
    <>
    <Grid className={classes.main} container direction="row">
      <Grid item xs="auto" lg={3} />
      <Grid item xs={12} lg={6}>
        <Collectible 
          className={classes.activeCollectible} 
          name={activeCollectible.name}
          tier={activeCollectible.tier} 
          level={activeCollectible.level} 
          clicks={activeCollectible.clicks} 
          clicksToLevel={activeCollectible.clicksToLevel}
          artist={activeCollectible.artist}
          created_at={activeCollectible.created_at}
          action={handleClick}
          />
        </Grid>
      <Grid item xs="auto" lg={3} />
    </Grid>
    {registerModal}
    </>
  )

  const display = (tab) => {
    switch(tab){
      case 0:
        return main
      case 1:
        return <Collection className={classes.collection} />
      case 2:
        return <ShopBox />
      default:
        return main
    }
  }

  return(
    display(tab)
  )
})

