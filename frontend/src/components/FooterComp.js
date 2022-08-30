import React, {Component} from 'react'
import {connect} from 'react-redux'
import './FooterComp.css'

class FooterComp extends Component {
  render() {

    const userLinks = (
      <>
        &copy; {new Date().getFullYear()} Kielce University of Technology | All rights reserved | Terms of Service | Privacy
        <a href="/kontakt"><button className="footer-button-contact">Kontakt</button></a>
        <a href="/lista-uzytkownikow"><button className="footer-button-contact-users">Użytkownicy</button></a>
      </>
    );

    const guestLinks = (
      <>
        &copy; {new Date().getFullYear()} Kielce University of Technology | All rights reserved | Terms of Service | Privacy
      </>
    );

  return (
    <div className='footer'>
      {this.props.auth.isLoggedIn ? userLinks : guestLinks}
    </div>
  );
  };
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(FooterComp);