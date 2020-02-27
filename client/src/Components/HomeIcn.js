import React from 'react'

import HomeIcon from '@material-ui/icons/Home';
import HomeIconOutlined from '@material-ui/icons/HomeOutlined';

const HomeIcn = (props) => {

  const activeIcon = (
    <HomeIcon />
  )

  const inactiveIcon = (
    <HomeIconOutlined />
  )
  

  return(
    props.isActive? activeIcon : inactiveIcon
  )
}

export default HomeIcn

