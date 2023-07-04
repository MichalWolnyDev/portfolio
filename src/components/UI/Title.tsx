import React from 'react'

const Title = props => {
  return (
    <h1 className='text-6xl mb-4'>
        {props.children}
    </h1>
  )
}

export default Title