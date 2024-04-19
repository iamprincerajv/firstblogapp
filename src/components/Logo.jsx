import React from 'react'
import logo from "../assets/logo.jpg"

const Logo = ({width = "100px"}) => {
  return (
    <div className='flex items-center'>
      <img src={logo} width={width} className='rounded-full mr-3' alt="logo" />
    </div>
  )
}

export default Logo
