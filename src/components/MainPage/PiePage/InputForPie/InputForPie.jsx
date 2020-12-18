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
    const save = () =>{
      props.saveData(type);
    }


    return (
     
        <div className={style.input}>
          <div className={style.inputForm}>
            <input className={style.inputData} ref={newLabelElem} type="text" placeholder="Write something"/>
            <input className={style.inputData} ref={newNumElem} type="text" placeholder="Write something"/>
          </div>
          

          <button className={style.inputButton} onClick={addLabel} >Add</button>
          <button className={style.inputButton} onClick={save} >Save</button>


        </div>
                
      
    );
}

export default InputForPie; 