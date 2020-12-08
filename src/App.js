import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Navbar from './components/Navbar/Navbar';

function App(props) {
    return (
      <div className="app">
        <Header/>
        
        <Navbar/>
        <div className="app-content">
          <MainPage chartData={props.chartData} addLabel={props.addLabel} /> 
        </div>
        
      </div>
    );
  
}

export default App;