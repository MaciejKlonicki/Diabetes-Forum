import React from 'react'
import './Calculator.css'

function Calculator() {
  return (
    <div>
        <BackImage />
        <Calculators />
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

  function Calculators() {
    return (
      <div>
        <div className='h2-calc'>
          <h2>Kalkulator</h2>
        </div>
      </div>
    )
  }

export default Calculator