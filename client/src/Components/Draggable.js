import React, {useRef} from 'react';
import {useDrag, DragPreviewImage} from 'react-dnd'

function Draggable({id, children}){
  const [{isDragging}, drag] = useDrag({
    item: {
      id: id,
      type: 'collectible'
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  })

  // sets the ref of the draggable element
  const ref = useRef()
  drag(ref)

  return(
    <div 
      ref={ ref }
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      {children}
    </div>
  )
}

export default Draggable