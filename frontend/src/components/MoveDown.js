import React, { useState } from 'react'
import './MoveDown.css'
import { Link } from 'react-router-dom'
import { AboutDiabetes } from './AboutDiabetes';

function MoveDown() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click); 

  return (
    <>
        <ul
            onClick={handleClick}
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
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