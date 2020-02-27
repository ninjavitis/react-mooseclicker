import React from 'react';

import StoreIcon from '@material-ui/icons/Store';
import StoreIconOutlined from '@material-ui/icons/StoreOutlined';


const StoreIcn =(props) => {
  const activeIcon = (
    <StoreIcon />
  )

  const inactiveIcon = (
    <StoreIconOutlined />
  )
  

  return(
    props.isActive? activeIcon : inactiveIcon
  )
}

export default StoreIcn