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
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite';
import teal from '@material-ui/core/colors/teal'
import cyan from '@material-ui/core/colors/cyan'
import blue from '@material-ui/core/colors/blue'
import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'


// Other Imports
import {ReactComponent as Moose} from '../Icons/Moose_loose.svg'


const styles = (theme => ({
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
  mooseCard: {
    padding:'10px',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: indigo[600],
  },
  center: {
    alignItems:'center',
    justifyContent:'center',
    justify:'center',
    margin:'auto'
  },
  toolBar:{
    minHeight:'32px'
  },
  chip: {
    margin: theme.spacing(1)
  },
  heartIcon:{
    color: pink[500],
  },
  grow: {
    flexGrow: 1,
  },
  cardTitle :{
    fontSize: '18px'
  },
  cardBorder:{
    padding: '5px',
  },
  t2: {
    backgroundColor: teal['A200'],
  }, 
  t3: {
    backgroundColor: indigo['A200'],
  }, 


}))

export default withStyles(styles)(({classes}) => {
  const {authenticated, user, updateUser} = useContext(AuthContext)
  const {
    activeCollectible,
    fetchActiveCollectible,
    clearCollectible,
    clickCollectible,
  } = useContext(AppContext)
  
  useEffect(()=>{
    if (authenticated){
      fetchActiveCollectible()
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

  return(
  <Paper className={`${classes.cardBorder} ${classes.t3}`} elevation={5}>
      <Card className={classes.mooseCard} variant='outlined' elevation={0}>
        <ToolBar className={classes.toolBar}>
          <Typography className={classes.cardTitle} variant="h6">{activeCollectible.name}</Typography>
          <div className={classes.grow} />
        <Chip 
            variant="outlined"
            avatar={<Avatar>LV</Avatar>}
            label={activeCollectible.level}
            className={classes.chip}
          />
          <Chip 
            variant="outlined"
            icon={<FavoriteIcon className={classes.heartIcon}/>}
            label={activeCollectible.clicks + ' / ' + activeCollectible.clicksToLevel}
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
    </Paper>
  )
})

