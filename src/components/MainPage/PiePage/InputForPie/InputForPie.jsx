import React from 'react';
import  style from '../PiePage.module.css'





function InputForPie(props) {
    return (
      <div  className={style.inputForm}>
        <div className={style.input}>
          <input  type="text" placeholder="Write something"/>
          <input  type="text" placeholder="Write something"/>
          <button className={style.inputButton}>Click on me</button>
          </div>         
      </div>
    );
}

export default InputForPie; 