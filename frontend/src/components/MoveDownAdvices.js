import React, { useState } from 'react';
import './MoveDownAdvices.css';
import { Link } from 'react-router-dom';
import { Advices } from './Advices';

 
function MoveDown() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click); 

  return (
    <>
        <ul
            onClick={handleClick}
            className={click ? 'movedown-menu-advices clicked' : 'movedown-menu-advices'}
        >
            {Advices.map((item, index)=>{
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