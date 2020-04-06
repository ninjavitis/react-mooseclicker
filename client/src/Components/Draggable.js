import React, {useRef} from 'react';
import {useDrag, DragPreviewImage} from 'react-dnd'

function Draggable(props){
  const [{isDragging}, drag] = useDrag({
    item: {
      type: 'collectible'
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  })

  
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
      {props.children}
    </div>
  )
}

export default Draggable