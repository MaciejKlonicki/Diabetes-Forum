import React, { useState } from 'react';
import './HeaderComp.css';
import { Link } from 'react-router-dom';
import MoveDownDiabetes from './MoveDownDiabetes';
import MoveDownMedicaments from './MoveDownMedicaments';

function HeaderComp() {

  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

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

  return (
    <nav className='header'>
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
      </ul>
    </nav>
  )
}

export default HeaderComp