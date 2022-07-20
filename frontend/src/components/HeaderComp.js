import React, { useState} from "react";
import './HeaderComp.css';
import { Link } from 'react-router-dom';
import MoveDownDiabetes from './SlideMenu/MoveDownDiabetes';
import MoveDownMedicaments from './SlideMenu/MoveDownMedicaments';
import MoveDownAdvices from './SlideMenu/MoveDownAdvices';
import MoveDownMore from './SlideMenu/MoveDownMore';

function HeaderComp() {

  const [aboutDiabetes, setAboutDiabetes] = useState(false);
  const [equipment, setEquipment] = useState(false);
  const [advices, setAdvices] = useState(false);
  const [more, setMore] = useState(false);

  const onMouseEnterAboutDiabetes = () => {
    if (window.innerWidth < 540) {
      setAboutDiabetes(false);
    } else {
      setAboutDiabetes(true);
    }
  };

  const onMouseLeaveAboutDiabetes = () => {
    if (window.innerWidth < 540) {
      setAboutDiabetes(false);
    } else {
      setAboutDiabetes(false);
    }
  };

  
  const onMouseEnterEquipment = () => {
    if (window.innerWidth < 540) {
      setEquipment(false);
    } else {
      setEquipment(true);
    }
  };

  const onMouseLeaveEquipment = () => {
    if (window.innerWidth < 540) {
      setEquipment(false);
    } else {
      setEquipment(false);
    }
  };

  const onMouseEnterAdvices = () => {
    if (window.innerWidth < 540) {
      setAdvices(false);
    } else {
      setAdvices(true);
    }
  };

  const onMouseLeaveAdvices = () => {
    if (window.innerWidth < 540) {
      setAdvices(false);
    } else {
      setAdvices(false);
    }
  };

  const onMouseEnterMore = () => {
    if (window.innerWidth < 540) {
      setMore(false);
    } else {
      setMore(true);
    }
  };

  const onMouseLeaveMore = () => {
    if (window.innerWidth < 540) {
      setMore(false);
    } else {
      setMore(false);
    }
  };

  return (
    <nav className='header'>
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
        O cukrzycy
        </Link>
        {aboutDiabetes && <MoveDownDiabetes />}
        </li>

        <li
          className='header-item'
          onMouseEnter={onMouseEnterEquipment}
          onMouseLeave={onMouseLeaveEquipment}
        >
        <Link to='/'
        className='header-links'
        >
        Sprzęt
        </Link>
        {equipment && <MoveDownMedicaments />}
        </li>

        <li
          className='header-item'
          onMouseEnter={onMouseEnterAdvices}
          onMouseLeave={onMouseLeaveAdvices}
        >
        <Link to='/'
        className='header-links'
        >
        Porady
        </Link>
        {advices && <MoveDownAdvices />}
        </li>

        <li
          className='header-item'
          onMouseEnter={onMouseEnterMore}
          onMouseLeave={onMouseLeaveMore}
        >
        <Link to='/'
        className='header-links'
        >
        Więcej
        </Link>
        {more && <MoveDownMore />}
        </li>
      </ul>
        <a href="/kalkulator"><button className="header-button-calc button-style">Kalkulator</button></a>
        <a href="/przeliczniki"><button className="header-button btn">Przeliczniki</button></a>
        <a href="/logowanie"><button className="header-button-login btn">Logowanie</button></a>
        <a href="/rejestracja"><button className="header-button-registration btn">Rejestracja</button></a>
    </nav>
  )
}

export default HeaderComp