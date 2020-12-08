import React from 'react';
import  style from './PiePage.module.css'
import Chart from './Chart/Chart';
import InputForPie from './InputForPie/InputForPie';



function PiePage(props) {
    return (
      <div className={style.piePage} >         
         <InputForPie addLabel={props.addLabel}/>
         <Chart chartData={props.chartData} />
      </div>
    );
}

export default PiePage; 