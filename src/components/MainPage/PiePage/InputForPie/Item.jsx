import React from 'react'
import  style from '../PiePage.module.css'

function Item (props) {
  

  return (
    <div className={style.item} >
      {props.text} {props.value}      
    </div>
    )
}

export default Item