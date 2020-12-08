import React from 'react';
import  style  from './MainPage.module.css';
import PiePage from './PiePage/PiePage';



function MainPage(props) {
    return (
      <div className={style.main}>
        <PiePage chartData={props.chartData}/>
      </div>
    );
}

export default MainPage; 