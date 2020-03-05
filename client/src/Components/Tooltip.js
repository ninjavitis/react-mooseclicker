import React from 'react';

import {withStyles} from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'

import lime from '@material-ui/core/colors/lime'


const COSTooltip = withStyles({
  tooltip:{
    color: 'black',
    backgroundColor: lime['A100'],
  },
})(Tooltip)

export default COSTooltip