import React from 'react'
import  style from '../PiePage.module.css'

function Item (props) {
  const deleteElem = () =>{
    let text = props.text;
    props.deleteElement(text);
  }
  

  return (
    <div  >
      <div className={style.item}>
        {props.text} {props.value}
        <button onClick={deleteElem}>Delete</button>  
      </div>
         
    </div>
    )
}

export default Item