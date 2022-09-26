import React, {Component} from "react";
import './Body.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Body extends Component {

  render(){
    const guestLinks = (
      <>
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
      </>
    );

    const userLinks = (
      <>
        <InformationCard
          img='/images/informations.jpg'
          path='/informacje'/>
        <FoodCard
          img='/images/food.jpg'
          path='/przeliczniki'/>
        <CalculatorCard
          img='/images/calc.jpg'
          path='/kalkulator'/>
        <CuriositiesCard
          img='/images/curiosities.jpg'
          path='/ciekawostki'/>
      </>
    );

  return (
    <div>
      {this.props.auth.isLoggedIn ? userLinks : guestLinks}
    </div>
  )
}
}

function InformationCard(props) {
  return (
    <div style={{position: "fixed", top: "50%", left: "250px", height: "570px", width: "380px",
      backgroundColor: "rgba(0, 0, 0, 0.37)", border: "2px solid #000000", transform: "translate(-50%, -50%)", textAlign: "center"}}>
      <h1>informacje</h1>
      <Link to={props.path}>
        <img
          src={props.img}
          alt='Informations'
          className='photo_cards'
        />
      </Link>
      <div>
      </div>
    </div>
    
  )
}

function FoodCard(props) {
  return (
    <div style={{position: "fixed", top: "50%", left: "700px", height: "570px", width: "380px",
    backgroundColor: "rgba(0, 0, 0, 0.37)", border: "2px solid #000000", transform: "translate(-50%, -50%)", textAlign: "center"}}>
      <h1>przeliczniki</h1>
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
    <div style={{position: "fixed", top: "50%", left: "1150px", height: "570px", width: "380px",
    backgroundColor: "rgba(0, 0, 0, 0.37)", border: "2px solid #000000", transform: "translate(-50%, -50%)", textAlign: "center"}}>
      <h1>kalkulator</h1>
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
    <div style={{position: "fixed", top: "50%", left: "1610px", height: "570px", width: "380px",
    backgroundColor: "rgba(0, 0, 0, 0.37)", border: "2px solid #000000", transform: "translate(-50%, -50%)", textAlign: "center"}}>
      <h1>zaloguj się</h1>
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

function CuriositiesCard(props) {
  return (
    <div style={{position: "fixed", top: "50%", left: "1610px", height: "570px", width: "380px",
    backgroundColor: "rgba(0, 0, 0, 0.37)", border: "2px solid #000000", transform: "translate(-50%, -50%)", textAlign: "center"}}>
      <h1>ciekawostki</h1>
      <Link to={props.path}>
        <img
          src={props.img}
          alt='curiosities'
          className='photo_cards'
        />
      </Link>
    </div>
    
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Body);