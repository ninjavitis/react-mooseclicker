import React, { useRef, useContext } from 'react';
import { useDrop } from 'react-dnd'

import { AppContext } from '../Providers/AppProvider'

const Droppable = ({type, children}) => {
  const {addToHand} = useContext(AppContext)

  const [{isOver, canDrop}, drop] = useDrop({
    accept: type,
    drop(item){addToHand(item.id)},
    collect: monitor => ({ 
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
      }}
      
      >
      {children}
    </div>
  )
}

export default Droppable