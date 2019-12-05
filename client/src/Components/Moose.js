// React Imports
import React, {useContext, useEffect} from 'react';
import {AuthContext} from '../Providers/AuthProvider'
import {AppContext} from '../Providers/AppProvider'

// Material UI Imports
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import RegistrationForm from './RegistrationForm'
import Paper from '@material-ui/core/Paper'
import ToolBar from '@material-ui/core/ToolBar'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar';

// Other Imports
import {ReactComponent as Moose} from '../Icons/Moose_loose.svg'


const styles = (theme => ({
  registrationModal:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: theme.palette.background.border,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: theme.palette.background.borderRadius,
    outline: 'none',
  },
  mooseCard: {
    padding:'10px'
  },
  center: {
    alignItems:'center',
    justifyContent:'center',
    justify:'center',
    margin:'auto'
  },
  chip: {
    margin: theme.spacing(1)
  },
}))

export default withStyles(styles)(({classes}) => {
  const {authenticated, user, updateUser} = useContext(AuthContext)
  const {activeMoose, getActiveMoose, mooseInteraction, clearMoose, updatedUser} = useContext(AppContext)

  
  useEffect(()=>{
    if (authenticated){
      getActiveMoose()
    } else {
      clearMoose()
    }
  },[authenticated])

  const handleClick = () => {
    if(authenticated){
      if(user.remainingClicks > 0){
        // process the click, then update the user in the auth provider
        mooseInteraction()
        // updateUser(updatedUser)
      } else {
        alert('no clicks remaining')
      }
    } else {
      handleModalOpen()
    }
  }

  const asyncInteract = async ()=>{
    await mooseInteraction()
  }


  // Registration Modal Section
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

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
        <Paper className={classes.paper}>
          <RegistrationForm handleClose={()=>handleModalClose()}/>
        </Paper>
      </Fade>
    </Modal>
  )

  return(
    <>
      <Card className={classes.mooseCard} border={0} >
        <ToolBar>
          <Chip 
            avatar={<Avatar>LV</Avatar>}
            label={activeMoose.level}
            className={classes.chip}
          />
          <Chip 
            avatar={<Avatar>XP</Avatar>}
            label={activeMoose.clicks + ' / ' + activeMoose.clicksToLevel}
            className={classes.chip}
          />
        </ToolBar>
        <CardActionArea
          onClick={handleClick}
        >
          <CardMedia>
            <Moose />
          </CardMedia>
        </CardActionArea>
        <CardContent>
          Artist: Rick Moosetly
        </CardContent>
      </Card>
      {registerModal}
    </>
  )
})

