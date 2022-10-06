import React from 'react';
import './Calculator.css';
import {useState} from 'react';
import { propTypes } from 'react-bootstrap/Image';

function Calculator() {
  return (
    <div>
        <Calculators 
        img='/images/plus.png'/>
        <Correct 
        img='/images/right-arrow.png'/>
    </div>
  )
}

  function Calculators(props) {
    return (
      <div>
        <p style={{position: "relative", top: "80px", fontSize: "1.8em", marginLeft: "11em", fontWeight: "400", color: "rgb(0,0,0)", letterSpacing: "13px", textTransform: "uppercase"}}>
          Przeliczniki
          </p>
        <p style={{position: "relative", top: "100px", fontSize: "1.8em", marginLeft: "38em", fontWeight: "400", color: "rgb(0,0,0)", letterSpacing: "13px", textTransform: "uppercase"}}>
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
              style={{textDecoration: "none", position: "relative", backgroundColor: "#0000005d", top: "2px", left: "2px", width: "35px", height: "30px", cursor: "text", resize: "none", fontSize: "16px", paddingTop: "2px", paddingLeft: "9px", borderRadius: "3px", border: "2px solid black"}}
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
              style={{position: "relative", backgroundColor: "#0000005d", top: "25px", left: "130px", width: "35px", height: "30px", cursor: "text", resize: "none", fontSize: "16px", paddingTop: "2px", paddingLeft: "9px", borderRadius: "3px", border: "2px solid black"}}
              type={propTypes.number}
              id='firstBreakfast'
              onChange={handleChangeFirstBreakfast}
              name='firstBreakfast'
              value={firstBreakfast}> 
              </input><br /><br />
          <p style={{fontSize: "0.78em", letterSpacing: "4px", marginTop: "-40px", marginLeft: "-3em", fontWeight: "400", color: "rgb(0,0,0)"}}>Pierwsze śniadanie</p>
          </td>
          </tr>
          <tr>
            <td>
              <input
              style={{position: "relative", backgroundColor: "#0000005d", top: "15px", left: "130px", width: "35px", height: "30px", cursor: "text", resize: "none", fontSize: "16px", paddingTop: "5px", paddingLeft: "5px", borderRadius: "3px", border: "2px solid black"}}
              type={propTypes.number}
              id='secondBreakfast'
              onChange={handleChangeSecondBreakfast}
              name='secondBreakfast'
              value={secondBreakfast}> 
              </input>
          <p className='position'>Drugie śniadanie</p>
              </td>
              </tr>
              <tr>
              <td>
              <input
              style={{position: "relative", backgroundColor: "#0000005d", top: "15px", left: "130px", width: "35px", height: "30px", cursor: "text", resize: "none", fontSize: "16px", paddingTop: "2px", paddingLeft: "9px", borderRadius: "3px", border: "2px solid black"}}
              type={propTypes.number}
              id='lunch'
              onChange={handleChangeLunch}
              name='lunch'
              value={lunch}> 
              </input>
          <p className='position'>Obiad</p>
          </td>
              </tr>
              <tr>
              <td>
              <input
              style={{position: "relative", backgroundColor: "#0000005d", top: "15px", left: "130px", width: "35px", height: "30px", cursor: "text", resize: "none", fontSize: "16px", paddingTop: "2px", paddingLeft: "9px", borderRadius: "3px", border: "2px solid black"}}
              type={propTypes.number}
              id='tea'
              onChange={handleChangeTea}
              name='tea'
              value={tea}> 
              </input>
          <p className='position'>Podwieczorek</p>
          </td>
              </tr>
              <tr>
              <td>
              <input
              style={{position: "relative", backgroundColor: "#0000005d", top: "15px", left: "130px", width: "35px", height: "30px", cursor: "text", resize: "none", fontSize: "16px", paddingTop: "2px", paddingLeft: "9px", borderRadius: "3px", border: "2px solid black"}}
              type={propTypes.number}
              id='first-dinner'
              onChange={handleChangeFirstDinner}
              name='first-dinner'
              value={firstDinner}> 
              </input>
          <p className='position'>Pierwsza kolacja</p>
          </td>
              </tr>
              <tr>
              <td>
              <input
              style={{position: "relative", backgroundColor: "#0000005d", top: "15px", left: "130px", width: "35px", height: "30px", cursor: "text", resize: "none", fontSize: "16px", paddingTop: "2px", paddingLeft: "9px", borderRadius: "3px", border: "2px solid black"}}
              type={propTypes.number}
              id='second-dinner'
              onChange={handleChangeSecondDinner}
              name='second-dinner'
              value={secondDinner}> 
              </input>
          <p className='position'>Druga kolacja</p>
          </td>
              </tr>
        </tbody>
        </table>
        </p>
        <div className='border-calc'>
          <p className='calc-title'>Wyliczenia</p>
          <div className='line'></div>
          <p className='sugar-position'>zmierzony cukier: </p>
              <input
              className='sugar'
              type={propTypes.number}
              id='sugar'
              onChange={handleChangeSugar}
              name='sugar'
              value={sugar}> 
              </input>
            <div className='first-n'>
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
            <div className='second-n'>
              {exchangersResult = ((Number(firstBreakfast) || Number(secondBreakfast) || Number(lunch) || Number(tea) || 
                Number(firstDinner) || Number(secondDinner))*exchangersInput).toFixed(1)} j
            </div>
            <div className='final-result'>
              Wynik = {(Number(sugarResult) + Number(exchangersResult)).toFixed(1)} j
            </div>
            </div>
      </div>
    )
  }

export default Calculator