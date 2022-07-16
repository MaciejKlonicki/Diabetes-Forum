import React from 'react';
import './Infoline.css';

function Infoline() {
  return (
    <div>
        <BackImage />
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

function BackImage() {
    return (
      <img className='background-image-infoline' 
        src={"/images/background.jpg"} 
        alt='backgroundimg'/>
    )
  }

  function InfolineNumberRoche(props) {
    return (
      <div className='image-for-infoline-roche'>
          <img
            src={props.img}
            alt='Infoline-roche'
            className='infoline-photo-roche'
          />
          <p className="image__description-infoline-roche">
              <b>Roche Diabetes Care Polska</b><br/>
              <b>801 080 104</b><br />
              czynna poniedziałek-piątek, godz. 8.00 - 16.00
          </p>
      </div>
    );
  }

  function InfolineNumberAscensia(props) {
    return (
      <div className='image-for-infoline-ascensia'>
          <img
            src={props.img}
            alt='Infoline-ascensia'
            className='infoline-photo-ascensia'
          />
          <p className="image__description-infoline-ascensia">
              <b>Ascensia Diabetes Care</b><br/>
              <b>800 999 090</b><br />
              infolinia bezpłatna z komórek:<br/> 
              <b>22 8820 900</b> opłata wg. taryfy operatora
          </p>
      </div>
    );
  }

  function InfolineNumberAbbott(props) {
    return (
      <div className='image-for-infoline-abbott'>
          <img
            src={props.img}
            alt='Infoline-abbott'
            className='infoline-photo-abbott'
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
      <div className='image-for-infoline-lifescan'>
          <img
            src={props.img}
            alt='Infoline-lifescan'
            className='infoline-photo-lifescan'
          />
          <p className="image__description-infoline-lifescan">
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
      <div className='image-for-infoline-medtronic'>
          <img
            src={props.img}
            alt='Infoline-medtronic'
            className='infoline-photo-medtronic'
          />
          <p className="image__description-infoline-medtronic">
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
      <div className='image-for-infoline-bioton'>
          <img
            src={props.img}
            alt='Infoline-bioton'
            className='infoline-photo-bioton'
          />
          <p className="image__description-infoline-bioton">
              <b>Bioton</b><br/>
              <b>801 88 99 71</b><br />
              czynna poniedziałek-piątek, godz. 8.00 - 16.00
          </p>
      </div>
    );
  }

export default Infoline