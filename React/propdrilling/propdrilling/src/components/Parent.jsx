import React from 'react'
import Child from './Child'
import Navbar from './Navbar'

const Parent = ({zameen}) => {
  return (
    <div>
      Parent
      <Child zameen={zameen} />
    </div>
  )
}

export default Parent
