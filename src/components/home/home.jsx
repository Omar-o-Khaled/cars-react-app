import React from 'react'

import About from '../about/about';
import HomePage from './homePage';
import Services from '../Services/services';
import Cars from '../Cars/cars';
import Contact from '../Contact-us/contact';
import Products from '../products/products';
import Testimonials from '../testimonials/testimonials';
import Sponser from '../sponsers/sponser';
import './home.css';

const Home = () => {
  return (
    <div className='home'>
      <HomePage/>
      <About/>
      <Services/>
      <Cars/>
      <Products/>
      <Testimonials/>
      <Sponser/>
      <Contact/>
    </div>
  )
}

export default Home