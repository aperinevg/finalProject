import  style from './PiePage.module.css';
import InputForPie from './InputForPie/InputForPie';
import PieChart from './Chart/PieChart';
import Item from './InputForPie/Item';



const PiePage = props => {
  let item;
  
  if (props.labels){
    item = props.labels.map((elem,i) => <Item key={i} index={i} type={props.type} deleteElement={props.deleteElement} text = {elem} value = {props.data[props.labels.indexOf(elem)]}/>);
    
    
    
    }

    return (
        <div className={style.container}>
            <h3 className={style.title}>{props.title}</h3>
            <div className={style.piePage} >
              <div>           
                <div className= {style.history}>
                  
                  {item}
                </div>
                
                <InputForPie type={props.type} lables={props.labels} data={props.data} addElement={props.addElement} saveData={props.saveData}/>
              
                
              
                
              </div>         
            
              <PieChart lables={props.labels} data={props.data}/>
            </div>
        </div>
    );
}

export default PiePage; 