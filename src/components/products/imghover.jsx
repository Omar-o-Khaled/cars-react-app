import React from 'react'

const Imghover = (props) => {
  return (
    <div className='imghover'>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <button className='contact'>contact</button>
    </div>
  )
}

export default Imghover