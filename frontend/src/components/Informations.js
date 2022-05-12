import React from 'react'
import './Body.css';
import './Informations.css'

function Informations() {
  return (
    <div>
        <BackImage />
        <ImagesForInformations
          img='/images/question.jpg'/>
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

  function ImagesForInformations(props) {
    return (
      <div className='image-for-info'>
          <img
          src={props.img}
          alt='Informations'
          className='info-photo'
          />
          <div className='h2-position'>
          <h2>Czym jest cukrzyca?</h2>
          </div>
          <div className="image__overlay">
          <p className="image__description">
            Here we have a brick wall.
          </p>
          </div>
      </div>
    );
  }

export default Informations