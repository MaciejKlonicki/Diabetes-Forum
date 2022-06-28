import React from 'react';
import './Calculator.css';
import {useState} from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

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
  var lunch;
  var tea;
  var firstDinner;
  var secondDinner;

  function Correct() {
    const [firstBreakfast, setFirstBreakfast] = useState('');
    const [secondBreakfast, setSecondBreakfast] = useState('');

    const handleChange = event => {
      setFirstBreakfast(event.target.value);
    };

    const handleChange2 = event => {
      setSecondBreakfast(event.target.value);
    };

    const wynik =  firstBreakfast + secondBreakfast;

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
            <input
            className='first-breakfast'
            type={propTypes.number}
            id='firstBreakfast'
            onChange={handleChange}
            name='firstBreakfast'
            value={firstBreakfast}> 
            </input><br /><br />
            <p className='first-breakfast-position'>pierwsze śniadanie</p>
            <input
            className='second-breakfast'
            type={propTypes.number}
            id='secondBreakfast'
            onChange={handleChange2}
            name='secondBreakfast'
            value={secondBreakfast}> 
            </input><br />
            <p className='second-breakfast-position'>drugie śniadanie</p>
            <p> {"Wynik = " + wynik}</p>
          </p>
      </div>
    )
  }

export default Calculator