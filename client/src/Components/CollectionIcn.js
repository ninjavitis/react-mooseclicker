import React from 'react'

import WidgetsIcon from '@material-ui/icons/Widgets';
import WidgetsIconOutlined from '@material-ui/icons/WidgetsOutlined';

const CollectionIcn = (props) => {

  const activeIcon = (
    <WidgetsIcon />
  )

  const inactiveIcon = (
    <WidgetsIconOutlined />
  )
  

  return(
    props.isActive? activeIcon : inactiveIcon
  )
}

export default CollectionIcn