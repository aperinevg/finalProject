import {React, useState } from 'react';
import  style  from './MainPage.module.css';
import PiePage from './PiePage/PiePage';



function MainPage() {
    const [chartLabels, setChartLabels] = useState([]);
    const [chartData, setChartData] = useState([]);
    const addElement = (text, num) => {
      setChartLabels(chartLabels.concat(text));
      setChartData(chartData.concat(num));
    }

    return (
      <div className={style.main}>
        <PiePage labels={chartLabels} data={chartData} addElement={addElement}/>
      </div>
    );
}

export default MainPage; 