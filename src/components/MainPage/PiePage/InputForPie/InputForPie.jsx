import React from 'react';
import  style from '../PiePage.module.css'





function InputForPie(props) {
    let newLabelElem = React.createRef();
    let newNumElem = React.createRef();
    const addLabel = ()=>{
      let text = newLabelElem.current.value;
      let num = newNumElem.current.value;
      props.addLabel(text,num);
      newLabelElem.current.value='';
      newNumElem.current.value='';
    }
    return (
      <div  className={style.inputForm}>
        <div className={style.input}>
          <input ref={newLabelElem} type="text" placeholder="Write something"/>
          <input ref={newNumElem} type="text" placeholder="Write something"/>
          <button onClick={addLabel} className={style.inputButton}>Add</button>
          </div>         
      </div>
    );
}

export default InputForPie; 