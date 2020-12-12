import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';


function App() {
    return (
      <div className="app">
        <Header/>        
       
        <div className="app-content">
          <MainPage /> 
        </div>
        
      </div>
    );
  
}

export default App;