import React, { createContext, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import Services from './components/Services/services';
import Cars from './components/Cars/cars';
import Contact from './components/Contact-us/contact';
import Notfound from './components/notfound/Notfound'
import carsData from '../public/data.json';
import  './components/js/script';
import './App.css';
import Products from './components/products/products';
import Sponser from './components/sponsers/sponser';
import Shopping from './components/shopping/shopping';

export const context = createContext()
export const stateConText = createContext()


function App() {
  function transHeader() {
    setClassHeader(true)
  }
  function headercolor() {
    setClassHeader(false)
  }
  document.addEventListener('scroll',()=>{
    if(location.pathname=='/'){
      if(window.scrollY>=100 ){
        document.querySelector('header').className='headerColor'
    }else{
      document.querySelector('header').className='transcolor'
    }
    }else{
      document.querySelector('header').className='headerColor'
    }
  })
  document.addEventListener('click',(ele)=>{
    if(ele.target.closest('.list')&&ele.target.href){
      if(location.pathname=='/'){
        document.querySelector('header').className='transcolor'
      }else{
        document.querySelector('header').className='headerColor'
      }
      
    }
  })
  useEffect(()=>{
    if(location.pathname=='/'){
      document.querySelector('header').className='transcolor'
    }else{
      document.querySelector('header').className='headerColor'
    }
})

  return (
    <context.Provider value={carsData}>
      <BrowserRouter>
        <div className='App'>
          <header>
            <h1>Your<span id='spancar'>Car</span></h1>
            <div className='mainNavBar'>
            <NavBar transHeader={transHeader} headercolor={headercolor}/>
            <Shopping/>
            <div id='navControl'><ion-icon name="menu-outline"></ion-icon></div>
            </div>
          </header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/cars' element={<Cars />} />
            <Route path='/product' element={<Products />} />
            <Route path='/sponser' element={<Sponser/>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </div>
        <div id='shopping' className='close'></div>
      </BrowserRouter>
    </context.Provider>
  )
}

export default App;

