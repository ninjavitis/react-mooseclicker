import React, {useContext, useEffect} from 'react';
import {useState} from 'react'
import {AuthContext} from '../Providers/AuthProvider'
import axios from 'axios'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import {ReactComponent as Moose} from '../Icons/Moose_loose.svg'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import RegistrationForm from './RegistrationForm'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import ToolBar from '@material-ui/core/ToolBar'
import Container from '@material-ui/core/Container'




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
  },
  center: {
    alignItems:'center',
    justifyContent:'center',
    justify:'center',
    margin:'auto'
  },

}))

export default withStyles(styles)(({classes}) => {
  const {authenticated, clicks} = useContext(AuthContext)
const [mooseClicks, setMooseClicks] = useState(0)
const [remainingClicks, setRemainingClicks] = useState(0)
const [nextClick, setNextClick] = useState(null)
const [timeToFreeClick, setTimeToFreeClick] = useState('')

const handleClick = () => {
  if(authenticated && remainingClicks > 0){
    axios
    .get("/api/moose/click")
    .then(res => {setMooseClicks(res.data)})
    .catch(res => console.log(res))
  
  } else {
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
      <Card className={classes.mooseCard}>
        <ToolBar>
          Clicked: {clicks} | Clicks: {remainingClicks}
        </ToolBar>
        <CardActionArea
          onClick={handleClick}
        >
          <CardMedia>
            <Moose />
          </CardMedia>
        </CardActionArea>
        <CardContent>
          <Typography>
            You've clicked your moose {clicks} times!
          </Typography>
          <Typography>
            You have {remainingClicks} clicks remaining.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size={'small'}>
            Get more clicks!
          </Button>
        </CardActions>
      </Card>
      {registerModal}
    </>
  )
})

