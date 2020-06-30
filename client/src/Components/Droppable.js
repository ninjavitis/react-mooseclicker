import React, { useRef, useContext, useState } from 'react';
import { useDrop } from 'react-dnd'

const Droppable = ({children, onDrop, type,}) => {
  const [{isOver, canDrop}, drop] = useDrop({
    accept: type,
    drop(item){ onDrop(item.id)},

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
        backgroundColor: isOver ? '#aaaaaa' : '#bbbbbb'
      }}
      
      >
      {children}
    </div>
  )
}

export default Droppable