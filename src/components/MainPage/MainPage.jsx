import {React, useState } from 'react';
import  style  from './MainPage.module.css';
import PiePage from './PiePage/PiePage';



function MainPage() {
    const [chartLabels, setChartLabels] = useState([]);
    const [chartData, setChartData] = useState([]);
    const addElement = (text, num) => {
      if(chartLabels.indexOf(text) === -1){       
        setChartLabels(chartLabels.concat(text));
        setChartData(chartData.concat(num));
      } else {        
        chartData[chartLabels.indexOf(text)]+= num;       
       
        const chartData2 = chartData.map( num =>  num );
        
        setChartData(chartData2);
        setChartLabels(chartLabels);


        console.log(chartData);
        console.log(chartData2);
        
        

      }
      
    }

    return (
      <div className={style.main}>
        <PiePage labels={chartLabels} data={chartData} addElement={addElement}/>
      </div>
    );
}

export default MainPage; 