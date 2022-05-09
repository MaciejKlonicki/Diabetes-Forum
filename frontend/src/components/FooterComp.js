import React from 'react'
import './FooterComp.css'

function FooterComp() {
  return (
    <div className='footer'>
        &copy; {new Date().getFullYear()} Kielce University of Technology | All rights reserved | Terms of Service | Privacy
      <div>
      <a href="/kontakt"><button class="footer-button-contact btn">Kontakt</button></a>
      </div>
    </div>
  )
}

export default FooterComp