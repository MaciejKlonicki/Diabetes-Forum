import React, { useState } from 'react';
import './MoveDownMore.css';
import { Link } from 'react-router-dom';
import { More } from './More';

 
function MoveDown() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click); 

  return (
    <>
        <ul
            onClick={handleClick}
            className={click ? 'movedown-menu-more clicked' : 'movedown-menu-more'}
        >
            {More.map((item, index)=>{
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