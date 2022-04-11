import React, { useState } from 'react';
import './HeaderComp.css';
import { Link } from 'react-router-dom';
import MoveDownDiabetes from './MoveDownDiabetes';
import MoveDownMedicaments from './MoveDownMedicaments';
import MoveDownAdvices from './MoveDownAdvices';

function HeaderComp() {

  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

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
      </ul>
    </nav>
  )
}

export default HeaderComp