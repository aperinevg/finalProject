import  style from './PiePage.module.css';
import InputForPie from './InputForPie/InputForPie';
import PieChart from './Chart/PieChart';
import Item from './InputForPie/Item';



const PiePage = props => {
  let item;
  
  if (props.labels){
    item = props.labels.map(elem => <Item type={props.type} deleteElement={props.deleteElement} text = {elem} value = {props.data[props.labels.indexOf(elem)]}/>);
    
    
    
    }

    return (
      <div>
        <h3 className={style.title}>{props.title}</h3>
        <div className={style.piePage} >
        
        <div className={style.data} >           
          <div className= {style.history}>
            {item}
          </div>
          <div >
            <InputForPie type={props.type} lables={props.labels} data={props.data} addElement={props.addElement} />
          </div>
          
         
          
        </div>         
         
        <PieChart lables={props.labels} data={props.data}/>
        </div>
      </div>
     
    );
}

export default PiePage; 