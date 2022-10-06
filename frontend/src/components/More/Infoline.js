import React from 'react';
import './Infoline.css';

function Infoline() {
  return (
    <div>
        <InfolineNumberRoche
            img='/images/telephone.png' />
        <InfolineNumberAscensia
            img='/images/telephone.png' />
        <InfolineNumberAbbott
            img='/images/telephone.png' />
        <InfolineNumberLifeScan
            img='/images/telephone.png' />
        <InfolineNumberMedtronic
            img='/images/telephone.png' />
        <InfolineNumberBioton
            img='/images/telephone.png' />
    </div>
  )
}

  function InfolineNumberRoche(props) {
    return (
      <div style={{position: "fixed", top: "49%", left: "600px", bottom: "-100px", width: "380px", transform: "translate(-50%, -50%)", zIndex: "1", textAlign: "center"}}>
          <img
            src={props.img}
            alt='Infoline-roche'
            style={{position: "relative", height: "50px", width: "50px", bottom: "15%", left: "10%", opacity: "0.9", transition: "all 0.5s ease"}}
          />
          <p className="image__description">
              <b>Roche Diabetes Care Polska</b><br/>
              <b>801 080 104</b><br />
              czynna poniedziałek-piątek, godz. 8.00 - 16.00
          </p>
      </div>
    );
  }

  function InfolineNumberAscensia(props) {
    return (
      <div style={{position: "fixed", top: "49%", left: "600px", bottom: "120px", width: "380px", transform: "translate(-50%, -50%)", zIndex: "1", textAlign: "center"}}>
          <img
            src={props.img}
            alt='Infoline-ascensia'
            style={{position: "relative", height: "50px", width: "50px", bottom: "20%", left: "10%", opacity: "0.9", transition: "all 0.5s ease"}}
          />
          <p className="image__description">
              <b>Ascensia Diabetes Care</b><br/>
              <b>800 999 090</b><br />
              infolinia bezpłatna z komórek:<br/> 
              22 8820 900 opłata wg. taryfy operatora
          </p>
      </div>
    );
  }

  function InfolineNumberAbbott(props) {
    return (
      <div style={{position: "fixed", top: "50%", left: "600px", bottom: "380px", width: "380px", transform: "translate(-50%, -50%)", zIndex: "1", textAlign: "center"}}>
          <img
            src={props.img}
            alt='Infoline-abbott'
            style={{position: "relative", height: "50px", width: "50px", bottom: "60%", left: "10%", opacity: "0.9", transition: "all 0.5s ease"}}
          />
          <p className="image__description-infoline-abbott">
              <b>Abbott Diabetes Care</b><br/>
              <b>800 222 688</b><br />
              infolinia bezpłatna
          </p>
      </div>
    );
  }

  function InfolineNumberLifeScan(props) {
    return (
      <div style={{position: "fixed", top: "53%", left: "600px", bottom: "500px", width: "380px", transform: "translate(-50%, -50%)", zIndex: "1", textAlign: "center"}}>
          <img
            src={props.img}
            alt='Infoline-lifescan'
            style={{position: "relative", height: "50px", width: "50px", bottom: "12%", left: "10%", opacity: "0.9", transition: "all 0.5s ease"}}
          />
          <p className="image__description-2">
              <b>LifeScan Johnson and Johnson</b><br/>
              <b>801 23 23 23</b><br />
              opłata wg. taryfy operatora
              czynna poniedziałek-piątek, 8:30 - 16:30
          </p>
      </div>
    );
  }

  function InfolineNumberMedtronic(props) {
    return (
      <div style={{position: "fixed", top: "70%", left: "600px", bottom: "680px", width: "380px", transform: "translate(-50%, -50%)", zIndex: "1", textAlign: "center"}}>
          <img
            src={props.img}
            alt='Infoline-medtronic'
            style={{position: "relative", height: "50px", width: "50px", bottom: "12%", left: "10%", opacity: "0.9", transition: "all 0.5s ease"}}
          />
          <p className="image__description-2">
              <b>Medtronic Poland</b><br/>
              <b>22 465 69 87</b><br />
              czynna 24 godziny na dobę
              opłata wg. taryfy operatora
          </p>
      </div>
    );
  }

  function InfolineNumberBioton(props) {
    return (
      <div style={{position: "fixed", top: "85%", left: "600px", bottom: "680px", width: "380px", transform: "translate(-50%, -50%)", zIndex: "1", textAlign: "center"}}>
          <img
            src={props.img}
            alt='Infoline-bioton'
            style={{position: "relative", height: "50px", width: "50px", bottom: "12%", left: "10%", opacity: "0.9", transition: "all 0.5s ease"}}
          />
          <p className="image__description-2">
              <b>Bioton</b><br/>
              <b>801 88 99 71</b><br />
              czynna poniedziałek-piątek, godz. 8.00 - 16.00
          </p>
      </div>
    );
  }

export default Infoline