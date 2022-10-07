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
      </>
    );

  return (
    <div 
    style={{background: "black", opacity: "0.8", color: "white", 
    position: "fixed", bottom: "0", width: "100%", height: "50px", 
    justifyContent: "center", alignItems: "center",
    display: "flex", fontSize: "14px"}}>
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