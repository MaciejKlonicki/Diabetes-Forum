import React from 'react';
import './Calculator.css';
import {useState} from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

function Calculator() {
  return (
    <div>
        <BackImage />
        <Calculators 
        img='/images/plus.png'/>
        <Correct 
        img='/images/right-arrow.png'
        />
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

  function Calculators(props) {
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
          <img
            src={props.img}
            alt='plus'
            className='plus'
          />
      </div>
    )
  }

  let result;
  let result2;

  function Correct(props) {
    const [correctNumber, setCorrectNumber] = useState("");
    const [firstBreakfast, setFirstBreakfast] = useState("");
    const [secondBreakfast, setSecondBreakfast] = useState("");
    const [lunch, setLunch] = useState("");
    const [tea, setTea] = useState("");
    const [firstDinner, setFirstDinner] = useState("");
    const [secondDinner, setSecondDinner] = useState("");
    const [sugar, setSugar] = useState("");
    const [exchangersInput, setExchangersInput] = useState("");

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

    const handleChange7 = event => {
      setSugar(event.target.value);
    };
    
    const handleChange8 = event => {
      setCorrectNumber(event.target.value);
    };

    const handleChange9 = event => {
      setExchangersInput(event.target.value);
    };

    return (
      <div>
        <p className="calculator-desc-2">
          Korekta:
          <input
          className='correct-textarea'
          type={propTypes.number}
          id='correctNumber'
          onChange={handleChange8}
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
          <p className='sugar-position'>Podaj zmierzony cukier: </p>
            <input
            className='sugar'
            type={propTypes.number}
            id='sugar'
            onChange={handleChange7}
            name='sugar'
            value={sugar}> 
            </input>
          <img
          src={props.img}
          alt='rightArrow'
          className='right-arrow'
          />
          <div className='result-of-sugar-calc'>{result = ((Number(sugar) - 100) / Number(correctNumber)).toFixed(1)} j</div>
          <p className='exchangers-position-text'>Podaj liczbe wymienników: </p>
          <input
            className='exchangers-input'
            type={propTypes.number}
            id='exchangers-input'
            onChange={handleChange9}
            name='exchangers-input'
            value={exchangersInput}> 
            </input>
            <div className='exchangers-calc'>{result2 = ((Number(firstBreakfast) || Number(secondBreakfast) || Number(lunch) || Number(tea) || Number(firstDinner) || Number(secondDinner))*exchangersInput).toFixed(1)} j</div>
            <img
            src={props.img}
            alt='rightArrow'
            className='right-arrow2'
            />
            <div className='final-result'>Wynik = {(Number(result) + Number(result2)).toFixed(1)}j</div>
      </div>
    )
  }

export default Calculator