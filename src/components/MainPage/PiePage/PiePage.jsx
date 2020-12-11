import  style from './PiePage.module.css';
import InputForPie from './InputForPie/InputForPie';
import PieChart from './Chart/PieChart';



function PiePage(props) {
    return (
      <div className={style.piePage} >         
        <InputForPie addElement={props.addElement}/>  
        <PieChart lables={props.labels} data={props.data}/>
      </div>
    );
}

export default PiePage; 