import React from 'react';
import style  from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
      <div className={style.navbar}>
        
            <NavLink className={style.link}  to='/'>Expenses</NavLink>
       
       
            <NavLink className={style.link} to='/income'>Income</NavLink>
            
            <NavLink className={style.link} to='/total'>Total</NavLink>
        
      </div>
    );
}

export default Navbar; 