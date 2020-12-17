import React from 'react'
import  style from '../PiePage.module.css'

const Item = props => {
  const deleteElem = () =>{
    let text = props.text;

    props.deleteElement(text, props.type);
  }
  

  return (
    
      <div className={style.item}>
        <div className={style.itemForm}>
          <span className={style.itemText}>{props.text}</span>
          <span className={style.itemValue}>{props.value + ' руб.'}</span>
        </div>        
         
        <button onClick={deleteElem}>Delete</button>
         
      </div>
         
    
    )
}

export default Item