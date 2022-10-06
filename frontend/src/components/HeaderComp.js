import React, {Component} from "react";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import MoveDownDiabetes from './SlideMenu/MoveDownDiabetes';
import MoveDownMedicaments from './SlideMenu/MoveDownMedicaments';
import MoveDownAdvices from './SlideMenu/MoveDownAdvices';
import MoveDownMore from './SlideMenu/MoveDownMore';
import { AiFillCaretDown } from 'react-icons/ai';
import './HeaderComp.css';
import {logoutUser} from './services/index';

class HeaderComp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      aboutDiabetes: false,
      equipment: false,
      advices: false,
      more: false,
    }
  }

  logout = () => {
    this.props.logoutUser();
  };

  render(){

  const onMouseEnterAboutDiabetes = () => {
    if (window.innerWidth < 540) {
      this.setState({aboutDiabetes: false})
    } else {
      this.setState({aboutDiabetes: true})
    }
  };

  const onMouseLeaveAboutDiabetes = () => {
    if (window.innerWidth < 540) {
      this.setState({aboutDiabetes: false})
    } else {
      this.setState({aboutDiabetes: false})
    }
  };
  
  const onMouseEnterEquipment = () => {
    if (window.innerWidth < 540) {
      this.setState({equipment: false})
    } else {
      this.setState({equipment: true})
    }
  };

  const onMouseLeaveEquipment = () => {
    if (window.innerWidth < 540) {
      this.setState({equipment: false})
    } else {
      this.setState({equipment: false})
    }
  };

  const onMouseEnterAdvices = () => {
    if (window.innerWidth < 540) {
      this.setState({advices: false})
    } else {
      this.setState({advices: true})
    }
  };

  const onMouseLeaveAdvices = () => {
    if (window.innerWidth < 540) {
      this.setState({advices: false})
    } else {
      this.setState({advices: false})
    }
  };

  const onMouseEnterMore = () => {
    if (window.innerWidth < 540) {
      this.setState({more: false})
    } else {
      this.setState({more: true})
    }
  };

  const onMouseLeaveMore = () => {
    if (window.innerWidth < 540) {
      this.setState({more: false})
    } else {
      this.setState({more: false})
    }
  };

  const guestLinks = (
    <>
      <Link to='/' style={{position: "relative", right: "800px"}}>
      <img src='/images/sugar-blood-level.png' alt='sugar-logo'/>
      </Link>
      <Link to="/logowanie"><button className="header-button-login btn">Logowanie</button></Link>
      <Link to="/rejestracja"><button className="header-button-registration btn">Rejestracja</button></Link>
    </>
  );

  const userLinks = (
    <>
      <Link to='/' style={{marginLeft: "20px", display: "flex"}}>
      <img src='/images/sugar-blood-level.png' alt='sugar-logo'/>
      </Link>
      <ul className='header-menu'>
        <li
          className='header-item'
          onMouseEnter={onMouseEnterAboutDiabetes}
          onMouseLeave={onMouseLeaveAboutDiabetes}
        >
        <Link to='/'
        className='header-links'
        >
          <div style={{position: "relative", top: "26px", left: "45px"}}>
            <AiFillCaretDown />
          </div>
          Cukrzyca
        </Link>
        {this.state.aboutDiabetes && <MoveDownDiabetes />}
        </li>

        <li
          className='header-item'
          onMouseEnter={onMouseEnterEquipment}
          onMouseLeave={onMouseLeaveEquipment}
        >
        <Link to='/'
        className='header-links'
        >
          <div style={{position: "relative", top: "26px", left: "35px"}}>
            <AiFillCaretDown />
          </div>
        Sprzęt
        </Link>
        {this.state.equipment && <MoveDownMedicaments />}
        </li>

        <li
          className='header-item'
          onMouseEnter={onMouseEnterAdvices}
          onMouseLeave={onMouseLeaveAdvices}
        >
        <Link to='/'
        className='header-links'
        >
          <div style={{position: "relative", top: "26px", left: "35px"}}>
            <AiFillCaretDown />
          </div>
        Porady
        </Link>
        {this.state.advices && <MoveDownAdvices />}
        </li>

        <li
          className='header-item'
          onMouseEnter={onMouseEnterMore}
          onMouseLeave={onMouseLeaveMore}
        >
        <Link to='/'
        className='header-links'
        >
          <div style={{position: "relative", top: "26px", left: "35px"}}>
            <AiFillCaretDown />
          </div>
        Więcej
        </Link>
        {this.state.more && <MoveDownMore />}
        </li>
      </ul>
        <Link to="/kalkulator"><button className="header-button-calc button-style">Kalkulator</button></Link>
        <Link to="/przeliczniki"><button className="header-button btn">Przeliczniki</button></Link>
        <Link to="/logowanie" onClick={this.logout}><button className="header-button-logout">Wyloguj</button></Link>
    </>
  );

  return (
    <nav 
    style={{background: "rgb(0,0,0)", opacity: "0.80", 
    height: "50px", width: "100%", display: "flex", 
    justifyContent: "center", alignItems: "center", 
    position: "fixed", top: "0", zIndex: "2"}}>
      {this.props.auth.isLoggedIn ? userLinks : guestLinks}
    </nav>
  );
  };
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComp);