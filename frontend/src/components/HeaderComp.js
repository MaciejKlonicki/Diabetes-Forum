import React, { useState } from 'react';
import './HeaderComp.css';
import { Link } from 'react-router-dom';
import MoveDownDiabetes from './MoveDownDiabetes';
import MoveDownMedicaments from './MoveDownMedicaments';
import MoveDownAdvices from './MoveDownAdvices';
import MoveDownMore from './MoveDownMore';

function HeaderComp() {

  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 540) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 540) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  
  const onMouseEnter2 = () => {
    if (window.innerWidth < 540) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 540) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  const onMouseEnter3 = () => {
    if (window.innerWidth < 540) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
    }
  };

  const onMouseLeave3 = () => {
    if (window.innerWidth < 540) {
      setDropdown3(false);
    } else {
      setDropdown3(false);
    }
  };

  const onMouseEnter4 = () => {
    if (window.innerWidth < 540) {
      setDropdown4(false);
    } else {
      setDropdown4(true);
    }
  };

  const onMouseLeave4 = () => {
    if (window.innerWidth < 540) {
      setDropdown4(false);
    } else {
      setDropdown4(false);
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
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
        <Link 
        className='header-links'
        >
        O cukrzycy
        </Link>
        {dropdown && <MoveDownDiabetes />}
        </li>

        <li
          className='header-item'
          onMouseEnter={onMouseEnter2}
          onMouseLeave={onMouseLeave2}
        >
        <Link 
        className='header-links'
        >
        Sprzęt
        </Link>
        {dropdown2 && <MoveDownMedicaments />}
        </li>

        <li
          className='header-item'
          onMouseEnter={onMouseEnter3}
          onMouseLeave={onMouseLeave3}
        >
        <Link 
        className='header-links'
        >
        Porady
        </Link>
        {dropdown3 && <MoveDownAdvices />}
        </li>

        <li
          className='header-item'
          onMouseEnter={onMouseEnter4}
          onMouseLeave={onMouseLeave4}
        >
        <Link 
        className='header-links'
        >
        Więcej
        </Link>
        {dropdown4 && <MoveDownMore />}
        </li>
      </ul>
        <a href="/kalkulator"><button class="header-button-calc btn">Kalkulator</button></a>
        <a href="/przeliczniki"><button class="header-button btn">Przeliczniki</button></a>
        <a href="/logowanie"><button class="header-button-login btn">Zaloguj się</button></a>
        <a href="/rejestracja"><button class="header-button-registration btn">Zarejestruj się</button></a>
    </nav>
  )
}

export default HeaderComp