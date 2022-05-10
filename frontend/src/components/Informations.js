import React from 'react'
import './Body.css';

function Informations() {
  return (

    <div>
        <BackImage />
        <Cards />
    </div>
  )
}

function BackImage() {
    return (
      <img className='background-image' 
      src={"/images/background.jpg"} 
      alt='backgroundimg'/>
    )
  }

  function Cards () {
      return (
          <div>
              asd
          </div>
      );
  }

export default Informations