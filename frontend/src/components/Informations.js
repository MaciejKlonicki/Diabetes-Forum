import React from 'react'
import './Body.css';
import { Link } from 'react-router-dom';
import './Informations.css'

function Informations() {
  return (
    <div>
        <BackImage />
        <ImagesForInformations
          img='/images/informations1.jpg'/>
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
        <Link to={props.path}>
          <img
          src={props.img}
          alt='Informations'
          className='info-photo'
          />
        </Link>
      </div>
    );
  }

export default Informations