import {React, useState } from 'react';
import  style  from './MainPage.module.css';
import Item from './PiePage/InputForPie/Item';
import PiePage from './PiePage/PiePage';



function MainPage() {
    const [chartLabels, setChartLabels] = useState([]);
    const [chartData, setChartData] = useState([]);


    let item;
    let value;
   

    if (chartLabels){
    item = chartLabels.map(elem => <Item text = {elem} value = {chartData[chartLabels.indexOf(elem)]}/>);
    // value = chartData.map(elem => <Item text = {elem}/>);
    }



    const addElement = (text, num) => {
      if(chartLabels.indexOf(text) === -1){       
        setChartLabels(chartLabels.concat(text));
        setChartData(chartData.concat(num));
      } else {        
        chartData[chartLabels.indexOf(text)]+= num;       
        
        const chartData2 = chartData.map( num =>  num );
        
        setChartData(chartData2);
        
      
        setChartLabels(chartLabels);


        
        // console.log(chartData2);
      }
      
    }
    console.log(chartData);
    return (
      <div className={style.main}>
        <PiePage labels={chartLabels} data={chartData} addElement={addElement}/>
        {item} 
        
      </div>
    );
}

export default MainPage; 