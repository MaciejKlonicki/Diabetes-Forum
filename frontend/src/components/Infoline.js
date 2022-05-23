import React from 'react';
import './Infoline.css';

function Infoline() {
  return (
    <div>
        <BackImage />
        <InfolineNumbers
            img='/images/telephone.png' />
        <InfolineNumbers2
            img='/images/telephone.png' />
        <InfolineNumbers3
            img='/images/telephone.png' />
        <InfolineNumbers4
            img='/images/telephone.png' />
        <InfolineNumbers5
            img='/images/telephone.png' />
        <InfolineNumbers6
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

  function InfolineNumbers(props) {
    return (
      <div className='image-for-infoline'>
          <img
          src={props.img}
          alt='Infoline'
          className='infoline-photo'
          />
          <p className="image__description-infoline">
              <b>Roche Diabetes Care Polska</b><br/>
            <b>801 080 104</b><br />
            czynna poniedziałek-piątek, godz. 8.00 - 16.00
          </p>
      </div>
    );
  }

  function InfolineNumbers2(props) {
    return (
      <div className='image-for-infoline2'>
          <img
          src={props.img}
          alt='Infoline2'
          className='infoline-photo2'
          />
          <p className="image__description-infoline2">
              <b>Ascensia Diabetes Care</b><br/>
            <b>800 999 090</b><br />
                infolinia bezpłatna z komórek:<br/> 
                <b>22 8820 900</b> opłata wg. taryfy operatora
          </p>
      </div>
    );
  }

  function InfolineNumbers3(props) {
    return (
      <div className='image-for-infoline3'>
          <img
          src={props.img}
          alt='Infoline3'
          className='infoline-photo3'
          />
          <p className="image__description-infoline3">
              <b>Abbott Diabetes Care</b><br/>
            <b>800 222 688</b><br />
                infolinia bezpłatna
          </p>
      </div>
    );
  }

  function InfolineNumbers4(props) {
    return (
      <div className='image-for-infoline4'>
          <img
          src={props.img}
          alt='Infoline4'
          className='infoline-photo4'
          />
          <p className="image__description-infoline4">
              <b>LifeScan Johnson and Johnson</b><br/>
            <b>801 23 23 23</b><br />
            opłata wg. taryfy operatora
            czynna poniedziałek-piątek, 8:30 - 16:30
          </p>
      </div>
    );
  }

  function InfolineNumbers5(props) {
    return (
      <div className='image-for-infoline5'>
          <img
          src={props.img}
          alt='Infoline5'
          className='infoline-photo5'
          />
          <p className="image__description-infoline5">
              <b>Medtronic Poland</b><br/>
            <b>22 465 69 87</b><br />
            czynna 24 godziny na dobę
            opłata wg. taryfy operatora
          </p>
      </div>
    );
  }

  function InfolineNumbers6(props) {
    return (
      <div className='image-for-infoline6'>
          <img
          src={props.img}
          alt='Infoline6'
          className='infoline-photo6'
          />
          <p className="image__description-infoline6">
              <b>Bioton</b><br/>
            <b>801 88 99 71</b><br />
            czynna poniedziałek-piątek, godz. 8.00 - 16.00
          </p>
      </div>
    );
  }

export default Infoline