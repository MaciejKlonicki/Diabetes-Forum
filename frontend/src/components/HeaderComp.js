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
      <Link to='/' className='header-logo-logout'>
      <img src='/images/sugar-blood-level.png' alt='sugar-logo'/>
      </Link>
      <a href="/logowanie"><button className="header-button-login btn">Logowanie</button></a>
      <a href="/rejestracja"><button className="header-button-registration btn">Rejestracja</button></a>
    </>
  );

  const userLinks = (
    <>
      <Link to='/' className='header-logo'>
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
          <div className="icon-pos-diabetes">
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
          <div className="icon-pos-eq">
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
          <div className="icon-pos-eq">
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
          <div className="icon-pos-eq">
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
    <nav className='header'>
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