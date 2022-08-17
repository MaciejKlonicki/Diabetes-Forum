import React, { Component } from 'react'
import './Registration.css'

export default class Registration extends Component {
  render() {
    return (
      <div>
        <BackImage />
      </div>
    )
  }
}

function BackImage() {
  return (
    <img className='background-image' 
    src={"/images/background.jpg"} 
    alt='backgroundimg'/>
  )
}

