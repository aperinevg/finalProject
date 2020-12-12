import React from 'react';
import style  from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
      <div className={style.navbar}>
        <div>
            <NavLink className={style.link} to='/expenses'>Expenses</NavLink>
        </div>
        <div>
            <NavLink className={style.link} to='/income'>Income</NavLink>
        </div>
      </div>
    );
}

export default Navbar; 