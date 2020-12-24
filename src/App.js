import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Navbar from './components/Navbar/Navbar';
import { HashRouter } from 'react-router-dom';




function App() {
    return (
    <HashRouter>
      <div >
        <Header/>        
        <div className="app">          
          <Navbar/>
          
          <MainPage /> 
          
        </div>
        
        
        
      </div>
    </HashRouter>
    );
  
}

export default App;