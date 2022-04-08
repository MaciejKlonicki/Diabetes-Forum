import React, { useState } from 'react';
import './HeaderComp.css';
import { Link } from 'react-router-dom';
import MoveDown from './MoveDown';

function HeaderComp() {

  const [dropdown, setDropdown] = useState(false);

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

  return (
    <nav className='header'>
      <ul className='header-menu'>
        <li
          className='header-item'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
        <Link 
        to='/'
        className='header-links'
        >
        Informacje
        </Link>
        {dropdown && <MoveDown />}
        </li>
        </ul>
    </nav>
  )
}

export default HeaderComp