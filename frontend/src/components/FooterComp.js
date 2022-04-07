import React from 'react'
import './FooterComp.css'

function FooterComp() {
  return (
    <div className='footer'>
        &copy; {new Date().getFullYear()} Kielce University of Technology | All rights reserved | Terms of Service | Privacy
    </div>
  )
}

export default FooterComp