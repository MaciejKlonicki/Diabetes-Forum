import React from 'react'
import './Login.css'

function Login() {
  return (
    <BackImage />
  )
}

function BackImage() {
    return (
      <img className='background-image' 
      src={"/images/background.jpg"} 
      alt='backgroundimg'/>
    )
  }

export default Login