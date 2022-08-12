import React from 'react'
import './Registration.css'

function Registration() {
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

export default Registration