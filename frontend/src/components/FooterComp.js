import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import './FooterComp.css';

class FooterComp extends Component {
  render(){

    const guestLinks = (
      <>

      </>
    );

    const userLinks = (
      <>
        <Link to="/kontakt"><button className="footer-button-contact">Kontakt</button></Link>
        <Link to="/lista-uzytkownikow"><button className="footer-button-contact-users">Użytkownicy</button></Link>
      </>
    );

  return (
    <div className='footer'>
        &copy; {new Date().getFullYear()} Kielce University of Technology | All rights reserved | Terms of Service | Privacy
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