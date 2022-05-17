import React from 'react';
import './Glucometers.css';

function Glucometers() {
  return (
    <div>
        <BackImage />
        <InformationAboutGlucometers />
    </div>
  )
}

function BackImage() {
    return (
      <img className='background-image-glucometers' 
      src={"/images/background.jpg"} 
      alt='backgroundimg'/>
    )
  }

function InformationAboutGlucometers() {
    return (
        <div>
            asd
        </div>
    )
}

export default Glucometers