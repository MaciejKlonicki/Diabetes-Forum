import React from 'react'
import './Body.css';
import '../App.css';
import { Link } from 'react-router-dom';

function Body() {
  return (
    <div className='body-container'>
        <BackImage />
        <Card
          img='/images/informations.jpg'
          path='/informations'/>
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

function Card(props) {
  return (
    <div className='cards_image'>
      <h1 class="dynamic-text-shadow">Informacje ogólne</h1>
      <Link to={props.path}>
        <img
          src={props.img}
          alt='Informations'
          className='photo_cards'
        />
      </Link>
    </div>
  )
}



export default Body