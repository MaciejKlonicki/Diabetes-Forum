import React, { useState } from 'react';
import './MoveDownDiabetes.css';
import { Link } from 'react-router-dom';
import { AboutDiabetes } from './AboutDiabetes';
import {authenticateUser} from '../services/index';
 
function MoveDown() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <>
        <ul
            onClick={handleClick}
            className={click ? 'movedown-menu-diabetes clicked' : 'movedown-menu-diabetes'}
        >
            {AboutDiabetes.map((item, index)=>{
                return (
                    <li key={index}>
                        <Link
                        className={item.cName}
                        to={item.path}
                        onClick={() => setClick(false)}
                        >
                            {item.title}
                        </Link>
                        
                    </li>
                );
            })}
        </ul>
    </>
  );
}

export default MoveDown