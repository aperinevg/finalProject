import {React, useState } from 'react';
import  style  from './MainPage.module.css';
import Item from './PiePage/InputForPie/Item';
import PiePage from './PiePage/PiePage';




function MainPage() {
    const [chartLabels, setChartLabels] = useState([]);
    const [chartData, setChartData] = useState([]);

    let item;    

    const deleteElement = text => {
      let indexOfText;
      
      const newChartLabels = chartLabels.filter((item, index) => {
        if(item === text){
          indexOfText = index;
        }        
        return item !== text
      });  
      const newChartData = chartData.filter((item, index) => index !== indexOfText);

      setChartLabels(newChartLabels);
      setChartData(newChartData);

      return {сhartLabels: newChartLabels, сhartData: newChartData}
      
    };
    const addElement = (text, num) => {
      if(chartLabels.indexOf(text) === -1){

        setChartLabels(chartLabels.concat(text));
        setChartData(chartData.concat(num));

      } else { 

        let oldNum = chartData[chartLabels.indexOf(text)];
        let newChart = deleteElement(text); 

        setChartLabels((newChart.сhartLabels.concat(text)));
        setChartData(newChart.сhartData.concat((num+oldNum)));
    
      }
      
    }
    
    



    if (chartLabels){
      item = chartLabels.map(elem => <Item deleteElement={deleteElement} text = {elem} value = {chartData[chartLabels.indexOf(elem)]}/>);
      
      }
    
    return (
      <div className={style.main}>
        <PiePage labels={chartLabels} data={chartData} addElement={addElement} />
        {item} 
        
      </div>
    );
}

export default MainPage; 