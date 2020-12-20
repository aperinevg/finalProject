import {React, useState } from 'react';
import  style  from './MainPage.module.css';
import { Route } from 'react-router-dom';

import PiePage from './PiePage/PiePage';




const MainPage = () => {
    const [chartLabels, setChartLabels] = useState(JSON.parse(localStorage.getItem('chartLabels')) || []);
    const [chartData, setChartData] = useState(JSON.parse(localStorage.getItem('chartData')) || []);

    const [chartLabelsIncome, setChartLabelsIncome] = useState(JSON.parse(localStorage.getItem('chartLabelsIncome')) || []);
    const [chartDataIncome, setChartDataIncome] = useState(JSON.parse(localStorage.getItem('chartDataIncome')) || []);

    const titleExpenses = "Expenses";
    const titleIncome = "Income";
    const titleTotal = "Total";


    const delElem = (labels, data, setLabels, setData, text ) => {
      let indexOfText; 
      const newChartLabels = labels.filter((item, index) => {
        if(item === text){
          indexOfText = index;
        }        
        return item !== text
      });  
      const newChartData = data.filter((item, index) => index !== indexOfText);

      setLabels(newChartLabels);
      setData(newChartData);
      return {labels: newChartLabels, data: newChartData}
    }
    const addElem = (labels, data, setLabels, setData, text, num, type) => {
      if(labels.indexOf(text) === -1){

        setLabels(labels.concat(text));
        setData(data.concat(num)); 

      } else { 

        let oldNum = data[labels.indexOf(text)];
        let newChart = deleteElement(text, type); 

        setLabels((newChart.labels.concat(text)));
        setData(newChart.data.concat((num+oldNum)));
    
      }
      
    }

       

    const deleteElement = (text, type )=> {
      if (type === "expenses"){       
        return delElem(chartLabels, chartData, setChartLabels, setChartData, text)
      }
      if (type === "income"){
        return delElem(chartLabelsIncome, chartDataIncome, setChartLabelsIncome, setChartDataIncome, text)
      }
    };
    const addElement = (text, num, type) => {

     
      if (type === "expenses"){
        return addElem(chartLabels, chartData, setChartLabels, setChartData, text, num, type);        
      }
      if (type === "income"){
        return addElem(chartLabelsIncome, chartDataIncome, setChartLabelsIncome, setChartDataIncome, text, num, type)
      }
      
    }
    const saveData = (type) => {
      if (type === "expenses"){
        localStorage.setItem('chartLabels', JSON.stringify(chartLabels));
        localStorage.setItem('chartData', JSON.stringify(chartData));
      } 
      if (type === "income"){
        localStorage.setItem('chartLabelsIncome', JSON.stringify(chartLabelsIncome));
        localStorage.setItem('chartDataIncome', JSON.stringify(chartDataIncome));
      }
      
    }
    

    
    
    return (
      <div className={style.container}>
        <div className={style.page}></div>
        <div className={style.page2}></div>
        <div className={style.main}>
          <div className="app-content">
              <Route path='/expenses' render = { () => <PiePage type="expenses" title={titleExpenses} labels={chartLabels} data={chartData} addElement={addElement} deleteElement={deleteElement} saveData={saveData}/> } />
              <Route path='/income' render = { () =>  <PiePage type="income" title={titleIncome} labels={chartLabelsIncome} data={chartDataIncome} addElement={addElement} deleteElement={deleteElement} saveData={saveData}/> } />
              {/* <Route path='/total' render = { () =>  <PiePage type="total" title={titleTotal} labels={chartLabelsIncome} data={chartDataIncome}/> } /> */}
          </div>
        </div>
      </div>
      
    
    );
}

export default MainPage; 