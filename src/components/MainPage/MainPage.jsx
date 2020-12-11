import {React, useState } from 'react';
import  style  from './MainPage.module.css';
import Item from './PiePage/InputForPie/Item';
import PiePage from './PiePage/PiePage';




function MainPage() {
    const [chartLabels, setChartLabels] = useState([]);
    const [chartData, setChartData] = useState([]);


    let item;
    let value;
   

    



    const addElement = (text, num) => {
      if(chartLabels.indexOf(text) === -1){       
        setChartLabels(chartLabels.concat(text));
        setChartData(chartData.concat(num));
      } else {        
        chartData[chartLabels.indexOf(text)]+= num;       
        
        const newChartData = chartData.filter( el =>  true);
        const newChartLabels = chartLabels.filter( el =>  true);
        
        
        setChartData(newChartData);
        setChartLabels(newChartLabels);
      }
      
    }
    const deleteElement = (text)=>{
      let indexOfText;
      
      
      const newChartLabels = chartLabels.filter((item, index) => {
        indexOfText = index;       
        
        return item !== text
      });
      
      const newChartData = chartData.filter((item, index) => index !== indexOfText); 
      setChartLabels(newChartLabels);
      setChartData(newChartData);


      // console.log(newChatrLabels);
      // console.log(newChatrData); 
      // function del(arr) {
      //   let result = [];
      //   let index;
      //   for (let item of arr) {
      //     if (item !== text) {
      //       result.push(item);
      //     } else {
      //       index = arr.indexOf(item);
      //     }
      //   }
      
      //   return result;
      // }

      // setChartLabels(del(chartLabels));
      // setChartData(chartData.map(item => item !== text))

      // chartLabels.splice(chartLabels.indexOf(text),1);
      // chartData.splice(chartLabels.indexOf(text),1);
      // // console.log(chartData[chartLabels.indexOf(text),1]);
      // const newChartData = chartData.slice();
      // const newChartLabels = chartLabels.slice();
     
      // setChartLabels(newChartLabels);
      // setChartData(newChartData);

      
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