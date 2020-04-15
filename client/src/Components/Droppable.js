import React, { useRef, useContext, useState } from 'react';
import { useDrop } from 'react-dnd'

import { AppContext } from '../Providers/AppProvider'

const Droppable = ({types, children, onDrop, }) => {

  const onlyUnique = (value, i, self) => self.indexOf(value) === i
  const uniqueTypes = types.filter(onlyUnique).join(',')

  const [{isOver, canDrop}, drop] = useDrop({
    accept: uniqueTypes,
    drop(item){ onDrop(item)},

    collect: monitor => ({ 
      // isOver will only be true if the types match
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  })

  const ref = useRef()
  drop(ref)

  return(
    <div 
      ref={ ref }
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: isOver && '#aaaaaa'
      }}
      
      >
      {children}
    </div>
  )
}

export default Droppable