import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { state, subscribe } from './state';

const rerenderEntairTree = (data) => {
  
  ReactDOM.render(
    
      <React.StrictMode>
        <App chartData={data} addLabel={state.addLabel}  />
      </React.StrictMode>
      ,
   
    document.getElementById('root')
  );


};


rerenderEntairTree(state.getChartData());
subscribe(()=>{
  rerenderEntairTree(state.getChartData())
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

