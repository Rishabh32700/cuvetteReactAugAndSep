import React from 'react'
import GrandChild from './GrandChild'
import Navbar from './Navbar'

const Child = ({zameen}) => {
  return (
    <div>
      Child
      <GrandChild zameen={zameen} />
    </div>
  )
}

export default Child
