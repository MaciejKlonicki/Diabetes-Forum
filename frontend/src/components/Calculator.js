import React from 'react'
import './Calculator.css'

function Calculator() {
  return (
    <div>
        <BackImage />
    </div>
  )
}

function BackImage() {
    return (
      <img className='background-image-calculator' 
      src={"/images/background.jpg"} 
      alt='backgroundimg'/>
    )
  }

export default Calculator