import React from 'react'
import './Calculator.css'

function Calculator() {
  return (
    <div>
        <BackImage />
        <Calculators />
        <Correct />
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
        <p className="calculator-desc-1">
          Przeliczniki
          </p>
      </div>
    )
  }

  var correctNumber;
  // var firstBreakfast = "Pierwsze śniadanie";

  function Correct() {
    return (
      <div>
        <p className="calculator-desc-2">
          Korekta:
          <textarea
          className='correct-textarea'
          id='correctNumber'
          name='correctNumber'
          value={correctNumber}> 
          </textarea> mg/dl insuliny
          </p>
          <p className='calculator-desc-3'>
            Posiłki
          </p>
      </div>
    )
  }

export default Calculator