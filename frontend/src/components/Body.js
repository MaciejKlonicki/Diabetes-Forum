import React from 'react'
import './Body.css';
import '../App.css';
import './HeaderComp.css'
import { Link } from 'react-router-dom';

function Body() {
  return (
    <div>
        <BackImage />
        <Information_Card
          img='/images/informations.jpg'
          path='/informacje'/>
        <Food_Card
          img='/images/food.jpg'
          path='/przeliczniki'/>
        <Calculator_Card
          img='/images/calc.jpg'
          path='/kalkulator'/>
        <Login_Card
          img='/images/login.jpg'
          path='/logowanie'/>
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

function Information_Card(props) {
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

function Food_Card(props) {
  return (
    <div className='cards_image2'>
      <h1 class="dynamic-text-shadow">Przeliczniki</h1>
      <Link to={props.path}>
        <img
          src={props.img}
          alt='Food'
          className='photo_cards'
        />
      </Link>
    </div>
    
  )
}

function Calculator_Card(props) {
  return (
    <div className='cards_image3'>
      <h1 class="dynamic-text-shadow">Kalkulator</h1>
      <Link to={props.path}>
        <img
          src={props.img}
          alt='Calculator'
          className='photo_cards'
        />
      </Link>
    </div>
    
  )
}

function Login_Card(props) {
  return (
    <div className='cards_image4'>
      <h1 class="dynamic-text-shadow">Zaloguj się</h1>
      <Link to={props.path}>
        <img
          src={props.img}
          alt='Food'
          className='photo_cards'
        />
      </Link>
    </div>
    
  )
}

export default Body