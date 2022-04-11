import React, { useState } from 'react';
import './MoveDownMedicaments.css';
import { Link } from 'react-router-dom';
import { Medicaments } from './Medicaments';
 
function MoveDown() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click); 

  return (
    <>
        <ul
            onClick={handleClick}
            className={click ? 'movedown-menu-medicaments clicked' : 'movedown-menu-medicaments'}
        >
            {Medicaments.map((item, index)=>{
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