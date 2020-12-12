import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';




function App() {
    return (
    <BrowserRouter>
      <div >
        <Header/>        
        <div className="app">          
          <Navbar/>
          
          <MainPage /> 
          
        </div>
        
        <Footer/>
        
      </div>
    </BrowserRouter>
    );
  
}

export default App;