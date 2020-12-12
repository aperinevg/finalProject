import React from 'react'
import  style from '../PiePage.module.css'

const Item = props => {
  const deleteElem = () =>{
    let text = props.text;

    props.deleteElement(text, props.type);
  }
  

  return (
    <div  >
      <div className={style.item}>
        <div className={style.itemText}>
          <span>{props.text}</span>
          <span>{props.value + ' руб.'}</span>
        </div>        
         
        <button onClick={deleteElem}>Delete</button>  
      </div>
         
    </div>
    )
}

export default Item