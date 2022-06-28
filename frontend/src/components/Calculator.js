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
          <h2>Kalkulator cukrzyka</h2>
        </div>
        <p className="calculator-desc-1">
          Przeliczniki
          </p>
        <p className="calculator-desc-4">
          Kalkulator
          </p>
      </div>
    )
  }

  var correctNumber;

  function Correct() {
    const [firstBreakfast, setFirstBreakfast] = useState("");
    const [secondBreakfast, setSecondBreakfast] = useState("");
    const [lunch, setLunch] = useState("");
    const [tea, setTea] = useState("");
    const [firstDinner, setFirstDinner] = useState("");
    const [secondDinner, setSecondDinner] = useState("");

    const handleChange = event => {
      setFirstBreakfast(event.target.value);
    };

    const handleChange2 = event => {
      setSecondBreakfast(event.target.value);
    };

    const handleChange3 = event => {
      setLunch(event.target.value);
    };

    const handleChange4 = event => {
      setTea(event.target.value);
    };

    const handleChange5 = event => {
      setFirstDinner(event.target.value);
    };

    const handleChange6 = event => {
      setSecondDinner(event.target.value);
    };

    return (
      <div>
        <p className="calculator-desc-2">
          Korekta:
          <input
          className='correct-textarea'
          id='correctNumber'
          name='correctNumber'
          value={correctNumber}> 
          </input> mg/dl insuliny
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
            <p className='first-breakfast-position'>Pierwsze śniadanie</p>
            <input
            className='second-breakfast'
            type={propTypes.number}
            id='secondBreakfast'
            onChange={handleChange2}
            name='secondBreakfast'
            value={secondBreakfast}> 
            </input>
            <p className='second-breakfast-position'>Drugie śniadanie</p>
            {/* <div>Wynik = {Number(firstBreakfast) + Number(secondBreakfast)}</div> */}
            <input
            className='lunch'
            type={propTypes.number}
            id='lunch'
            onChange={handleChange3}
            name='lunch'
            value={lunch}> 
            </input>
            <p className='lunch-position'>Obiad</p>
            <input
            className='tea'
            type={propTypes.number}
            id='tea'
            onChange={handleChange4}
            name='tea'
            value={tea}> 
            </input>
            <p className='tea-position'>Podwieczorek</p>
            <input
            className='first-dinner'
            type={propTypes.number}
            id='first-dinner'
            onChange={handleChange5}
            name='first-dinner'
            value={firstDinner}> 
            </input>
            <p className='first-dinner-position'>Pierwsza kolacja</p>
            <input
            className='second-dinner'
            type={propTypes.number}
            id='second-dinner'
            onChange={handleChange6}
            name='second-dinner'
            value={secondDinner}> 
            </input>
            <p className='second-dinner-position'>Druga kolacja</p>
          </p>
      </div>
    )
  }

export default Calculator