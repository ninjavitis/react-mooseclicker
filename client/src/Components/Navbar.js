import React, {useContext, useEffect, useState} from 'react';

import {AuthContext} from '../Providers/AuthProvider'
import {AppContext} from '../Providers/AppProvider'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { fade, withStyles } from '@material-ui/core/styles';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import {ReactComponent as Logo} from '../Icons/moose.svg'
import LoginForm from './LoginForm';
import LoginForm2 from './LoginForm2';


import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip';

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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
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
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: theme.palette.background.border,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: theme.palette.background.borderRadius,
    outline: 'none',
  },
  chip: {
    margin: theme.spacing(1)
  },
}));


export default withStyles(styles)(({classes}) => {
  //Context
  const {authenticated, handleLogout,} = useContext(AuthContext)
  const {user, fetchUser} = useContext(AppContext)

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

 const PlayerStatus = () => {
   return(
     <>
      <Chip label={'Clicks Remaining: ' + user.remainingClicks} className={classes.chip} />
      <Chip label={'CP: ' + user.points} className={classes.chip} />
    </>
   )
   }


  // Mobile Account Menu
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </MenuItem>
        { menuItems } 
    </Menu>
  )

  // Desktop Account Menu
  const menuId = 'primary-account-window'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{vertical:'top', horizontal:'right'}}
      id={menuId}
      keepMounted
      transformOrigin={{vertical:'top', horizontal:'right'}}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {
        menuItems
      }
    </Menu>
  )

  const SectionDesktop = () => {
    return(
      <IconButton
      edge = "end"
      aria-label="current account"
      aria-controls={menuId}
      aria-haspopup="true"
      onClick={handleProfileMenuOpen}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
    )
  }

  const SectionMobile = () =>{
    return(
      <IconButton
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
      >
        <MoreIcon />
      </IconButton>
    )
  }

  return(
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
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
          {authenticated? <PlayerStatus /> : <LoginForm2 />}

          <div className={classes.sectionDesktop}>
            {authenticated && <SectionDesktop />}
          </div>
          <div className={classes.sectionMobile}>
            {authenticated && <SectionMobile />}
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
      {renderMobileMenu}
      {loginModal}
    </div>
  )
  })