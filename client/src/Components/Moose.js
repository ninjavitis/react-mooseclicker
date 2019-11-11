import React, {useContext} from 'react';
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
import LoginForm from './LoginForm'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';




const styles = (theme => ({
  loginModal:{
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
const [clicks, setClicks] = useState(0)
const [nextClick, setNextClick] = useState(null)

const {authenticated} = useContext(AuthContext)


const handleClick = () => {
  if(authenticated){
    axios
    .get("/api/moose/click")
    .then(res => {})
    .catch(res => console.log(res))
  
    setClicks(clicks +1)
  } else {
    setModalOpen(true)
  }
}

// Login Modal Section
const [modalOpen, setModalOpen] = React.useState(false);

const handleModalOpen = () => {
  setModalOpen(true);
};

const handleModalClose = () => {
  setModalOpen(false);
};

const loginModal = (
  <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.loginModal}
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
        <Grid
          className={classes.grid}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <RegistrationForm />
          </Grid>
          <Grid item xs={5}>
            <Divider variant='middle' />
          </Grid>
          <Grid item xs={2} className={classes.centered}>
            or
          </Grid>
          <Grid item xs={5}>
            <Divider variant='middle' />
          </Grid>
          <Grid item xs={12} className={classes.centered}>
            <Button className={classes.centered} variant="outlined">
              Log In
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Fade>
  </Modal>
)

  return(
    <>
      <Card className={classes.mooseCard}>
        <CardActionArea
          onClick={handleClick}
        >
          <CardMedia>
            <Moose />
          </CardMedia>
        </CardActionArea>
        <CardContent>
          <Typography>
            Clicks:{clicks}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>
            Get more clicks!
          </Button>
        </CardActions>
      </Card>
      {loginModal}
    </>
  )
})

