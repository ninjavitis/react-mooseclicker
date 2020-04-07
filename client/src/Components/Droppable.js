import React, { useRef } from 'react';
import { useDrop } from 'react-dnd'

const Droppable = ({type, children}) => {

  const [,drop] = useDrop({
    accept: type,
    drop(item){

    }
  })

  const ref = useRef()
  drop(ref)

  return(
    <div ref={ ref }>
      {children}
    </div>
  )
}

export default Droppable