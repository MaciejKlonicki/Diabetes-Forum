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
        img='/images/right-arrow.png'/>
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
        <p className="calculator-desc-exchangers">
          Przeliczniki
          </p>
        <p className="calculator-desc-calculator">
          Kalkulator
          </p>
      </div>
    )
  }

  let sugarResult;
  let exchangersResult;

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

    const handleChangeFirstBreakfast = event => {
      setFirstBreakfast(event.target.value);
    };

    const handleChangeSecondBreakfast = event => {
      setSecondBreakfast(event.target.value);
    };

    const handleChangeLunch = event => {
      setLunch(event.target.value);
    };

    const handleChangeTea = event => {
      setTea(event.target.value);
    };

    const handleChangeFirstDinner = event => {
      setFirstDinner(event.target.value);
    };

    const handleChangeSecondDinner = event => {
      setSecondDinner(event.target.value);
    };

    const handleChangeSugar = event => {
      setSugar(event.target.value);
    };
    
    const handleChangeCorrectNumber = event => {
      setCorrectNumber(event.target.value);
    };

    const handleChangeExchangersInput = event => {
      setExchangersInput(event.target.value);
    };

    return (
      <div>
        <p className="calculator-desc-correct">
          Korekta:
            <input
              className='correct-textarea'
              type={propTypes.number}
              id='correctNumber'
              onChange={handleChangeCorrectNumber}
              name='correctNumber'
              value={correctNumber}> 
          </input> mg/dl insuliny
        </p>
        <p className='calculator-desc-eat'>
          <table className='calc-table'>
            <tbody>
              <tr>
              <th>Posiłki</th>
              </tr>
              <tr>
                <td>
              <input
              className='first-breakfast'
              type={propTypes.number}
              id='firstBreakfast'
              onChange={handleChangeFirstBreakfast}
              name='firstBreakfast'
              value={firstBreakfast}> 
              </input><br /><br />
          <p className='first-breakfast-position'>Pierwsze śniadanie</p>
          </td>
          </tr>
          <tr>
            <td>
              <input
              className='second-breakfast'
              type={propTypes.number}
              id='secondBreakfast'
              onChange={handleChangeSecondBreakfast}
              name='secondBreakfast'
              value={secondBreakfast}> 
              </input>
          <p className='second-breakfast-position'>Drugie śniadanie</p>
              </td>
              </tr>
              <tr>
              <td>
              <input
              className='lunch'
              type={propTypes.number}
              id='lunch'
              onChange={handleChangeLunch}
              name='lunch'
              value={lunch}> 
              </input>
          <p className='lunch-position'>Obiad</p>
          </td>
              </tr>
              <tr>
              <td>
              <input
              className='tea'
              type={propTypes.number}
              id='tea'
              onChange={handleChangeTea}
              name='tea'
              value={tea}> 
              </input>
          <p className='tea-position'>Podwieczorek</p>
          </td>
              </tr>
              <tr>
              <td>
              <input
              className='first-dinner'
              type={propTypes.number}
              id='first-dinner'
              onChange={handleChangeFirstDinner}
              name='first-dinner'
              value={firstDinner}> 
              </input>
          <p className='first-dinner-position'>Pierwsza kolacja</p>
          </td>
              </tr>
              <tr>
              <td>
              <input
              className='second-dinner'
              type={propTypes.number}
              id='second-dinner'
              onChange={handleChangeSecondDinner}
              name='second-dinner'
              value={secondDinner}> 
              </input>
          <p className='second-dinner-position'>Druga kolacja</p>
          </td>
              </tr>
        </tbody>
        </table>
        </p>
          <p className='sugar-position'>zmierzony cukier: </p>
              <input
              className='sugar'
              type={propTypes.number}
              id='sugar'
              onChange={handleChangeSugar}
              name='sugar'
              value={sugar}> 
              </input>
            <div className='result-of-sugar-calc'>
              {sugarResult = ((Number(sugar) - 100) / Number(correctNumber)).toFixed(1)} j
            </div>
          <p className='exchangers-position-text'>
            liczba wymienników: 
          </p>
            <input
              className='exchangers-input'
              type={propTypes.number}
              id='exchangers-input'
              onChange={handleChangeExchangersInput}
              name='exchangers-input'
              value={exchangersInput}> 
            </input>
            <div className='exchangers-calc'>
              {exchangersResult = ((Number(firstBreakfast) || Number(secondBreakfast) || Number(lunch) || Number(tea) || 
                Number(firstDinner) || Number(secondDinner))*exchangersInput).toFixed(1)} j
            </div>
            <div className='final-result'>
              Wynik = {(Number(sugarResult) + Number(exchangersResult)).toFixed(1)} j
            </div>
      </div>
    )
  }

export default Calculator