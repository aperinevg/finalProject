import {React, useState } from 'react';
import  style  from './MainPage.module.css';
import { Route } from 'react-router-dom';

import PiePage from './PiePage/PiePage';




const MainPage = () => {
    const [chartLabels, setChartLabels] = useState([]);
    const [chartData, setChartData] = useState([]);

    const [chartLabelsIncome, setChartLabelsIncome] = useState([]);
    const [chartDataIncome, setChartDataIncome] = useState([]);

    const titleExpenses = "Expenses";
    const titleIncome = "Income";


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
        return addElem(chartLabels, chartData, setChartLabels, setChartData, text, num, type)
      }
      if (type === "income"){
        return addElem(chartLabelsIncome, chartDataIncome, setChartLabelsIncome, setChartDataIncome, text, num, type)
      }
    }
    

    
    
    return (
    
      <div className={style.main}>
        
      
        <div className="app-content">
            <Route path='/expenses' render = { () => <PiePage type="expenses" title={titleExpenses} labels={chartLabels} data={chartData} addElement={addElement} deleteElement={deleteElement}/> } />
            <Route path='/income' render = { () =>  <PiePage type="income" title={titleIncome} labels={chartLabelsIncome} data={chartDataIncome} addElement={addElement} deleteElement={deleteElement}/> } />
            
                  
        </div>

        

      </div>
    
    );
}

export default MainPage; 