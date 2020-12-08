import React from 'react';
import  style  from './MainPage.module.css';
import PiePage from './PiePage/PiePage';



function MainPage(props) {
    return (
      <div className={style.main}>
        <PiePage chartData={props.chartData} addLabel={props.addLabel}/>
      </div>
    );
}

export default MainPage; 