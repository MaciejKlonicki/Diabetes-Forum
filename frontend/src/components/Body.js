import React from 'react'
import './Body.css';
import '../App.css';
import { Link } from 'react-router-dom';

function Body() {
  return (
    <div className='body-container'>
      <h1>Forum internetowe dla osób z cukrzycą</h1>
        <BackImage />
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
    <div>
      <div>
        <button to={props.path}>  
        
        </button>
      </div>
    </div>
  )
}



export default Body