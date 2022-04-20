import React from 'react'
import './Body.css';
import '../App.css';

function Body() {
  return (
    <div>
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

export default Body