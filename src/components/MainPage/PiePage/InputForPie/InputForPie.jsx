import React from 'react';
import  style from '../PiePage.module.css'






const InputForPie = props => {

    const type = props.type;
  

    let newLabelElem = React.createRef();
    let newNumElem = React.createRef();
    const addLabel = () => {

      let text = newLabelElem.current.value;
      let num = +newNumElem.current.value;
      if( text && num ){
      props.addElement(text,num, type);
      newLabelElem.current.value='';
      newNumElem.current.value='';
      }
      
    }
    return (
      <div  className={style.inputForm}>
        <div className={style.input}>
          <input className={style.inputData} ref={newLabelElem} type="text" placeholder="Write something"/>
          <input className={style.inputData} ref={newNumElem} type="text" placeholder="Write something"/>
          <button onClick={addLabel} className={style.inputButton}>Add</button>
          </div>
          <div className={style.table}>
            
          </div>         
      </div>
    );
}

export default InputForPie; 