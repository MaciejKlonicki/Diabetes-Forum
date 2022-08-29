import React from 'react'
import './FooterComp.css'

function FooterComp() {
  return (
    <div className='footer'>
        &copy; {new Date().getFullYear()} Kielce University of Technology | All rights reserved | Terms of Service | Privacy
      <div>
      <a href="/kontakt"><button className="footer-button-contact">Kontakt</button></a>
      <a href="/lista-uzytkownikow"><button className="footer-button-contact-users">Użytkownicy</button></a>
      </div>
    </div>
  )
}

export default FooterComp