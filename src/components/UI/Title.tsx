import React from 'react'

type TitleProps = {
  children?: React.ReactNode
}

const Title = (props: TitleProps) => {
  return (
    <h1 className='xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-white mb-4'>
        {props.children}
    </h1>
  )
}

export default Title