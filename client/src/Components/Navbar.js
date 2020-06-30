import React, {useContext, useEffect, useState} from 'react';

// React Context
import {AuthContext} from '../Providers/AuthProvider'
import {AppContext} from '../Providers/AppProvider'

// Local
import LoginForm from './LoginForm';
import LoginForm2 from './LoginForm2';
import Statusbar from './Statusbar'

// Material UI
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip'

// Material UI Colors
import deepPurple from '@material-ui/core/colors/deepPurple'
import lime from '@material-ui/core/colors/lime'

// Material UI Icons
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';

// Icons
import {ReactComponent as Logo} from '../Icons/moose.svg'
import HomeIcn from './HomeIcn'
import CollectionIcn from './CollectionIcn'
import StoreIcn from './StoreIcn'

// COS Components
import COSTooltip from './Tooltip'


// Material UI Theme
const styles = (theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  loginModal:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolbar:{
    backgroundColor: deepPurple[900],
  },
  paper: {
    border: theme.palette.background.border,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: theme.palette.background.borderRadius,
    outline: 'none',
  },
}));


 const Navbar = withStyles(styles)(({classes}) => {
  //Context
  const {authenticated, handleLogout,} = useContext(AuthContext)
  const {fetchUser, tab, setTab} = useContext(AppContext)

  //State
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);  

  //Local
  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
  useEffect(()=>{
    authenticated && fetchUser()
  },[authenticated])

  const handleProfileMenuOpen = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleTabChange = (e) => {
    setTab(e)
  }

  // Registration Modal Section
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
          <LoginForm handleClose={()=>handleModalClose()}/>
        </Paper>
      </Fade>
    </Modal>
  )

  const menuItems = [
    <MenuItem key={'1'}>My Account</MenuItem>,
    <MenuItem onClick={handleLogout} key={'2'}>Log Out</MenuItem>
 ]

 const accountIcon = (
  <COSTooltip title="My Account">
  <IconButton
      edge="start"
      aria-label="My Account"
      color="inherit"
      onClick={()=>handleTabChange(3)}
    >
        <AccountCircle is active={tab === 3}/>
      </IconButton>
    </COSTooltip>
 )

 const navigationButtons = (
   <>
    <COSTooltip title="Home">
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="Home"
        onClick={()=>handleTabChange(0)}
      >
        <HomeIcn isActive={tab === 0} />
      </IconButton>
    </COSTooltip>
    <COSTooltip title="Collection">
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="Collection"
        onClick={()=>handleTabChange(1)}
      >
        <CollectionIcn isActive={tab === 1}/>
      </IconButton>
    </COSTooltip>
    <COSTooltip title="Shop">
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="Shop"
        onClick={()=>handleTabChange(2)}
      >
        <StoreIcn isActive={tab === 2}/>
      </IconButton>
    </COSTooltip>
  </>
 )

  return(
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="CollectOS"
          >
            <Logo />
          </IconButton>
          <Typography className={classes.title} variant='h6' noWrap>
            CollectOS
          </Typography>
          <div className={classes.grow} />
          {authenticated && navigationButtons}
          <div className={classes.grow} />
          {!authenticated && <LoginForm2 />}
          <div className={classes.sectionDesktop}>
            {authenticated && accountIcon}
          </div>
        </Toolbar>
      <Statusbar />
      </AppBar>
      {loginModal}
    </div>
  )
  })

  export default Navbar