import React from "react";
import './Body.css';
import { Link } from 'react-router-dom';

function Body() {

  return (
    <div>
        <BackImage />
        <InformationCard
          img='/images/informations.jpg'
          path='/informacje'/>
        <FoodCard
          img='/images/food.jpg'
          path='/przeliczniki'/>
        <CalculatorCard
          img='/images/calc.jpg'
          path='/kalkulator'/>
        <LoginCard
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

function InformationCard(props) {
  return (
    <div className='cards-image-information'>
      <h1 className="dynamic-text-shadow">Informacje ogólne</h1>
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

function FoodCard(props) {
  return (
    <div className='cards-image-food'>
      <h1 className="dynamic-text-shadow">Przeliczniki</h1>
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

function CalculatorCard(props) {
  return (
    <div className='cards-image-calculator'>
      <h1 className="dynamic-text-shadow">Kalkulator</h1>
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

function LoginCard(props) {
  return (
    <div className='cards-image-login'>
      <h1 className="dynamic-text-shadow">Zaloguj się</h1>
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