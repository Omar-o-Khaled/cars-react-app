import React from 'react'
import stone from '../../assets/aboutStone.png';
import car from '../../assets/aboutCar.png';

import './about.css';

const About = () => {
  return (
    <div className='about'>
      <div className='container'>
        <div className='headingContainer'>
          <div className='textground'>about us</div>
          <h2 className='heading'>about</h2>
        </div>
        <div className='aboutbox'>
          <div className='aboutText'>
            <p>YourCar is a luxury car dealership that offers a personalized and first-class experience to its clients. Our team of experienced professionals is dedicated to providing exceptional service and finding the perfect vehicle to match our clients' unique preferences and requirements. We have an extensive selection of high-end vehicles, ranging from sports cars to SUVs, all of which are maintained to the highest standards of quality and safety.</p>
            <p>YourCar is a luxury car dealership that offers a personalized and first-class experience to its clients. Our team of experienced professionals is dedicated to providing exceptional service and finding the perfect vehicle to match our clients' unique preferences and requirements. We have an extensive selection of high-end vehicles, ranging from sports cars to SUVs, all of which are maintained to the highest standards of quality and safety.</p>
          </div>
          <div className='aboutImg'>
            <img src={stone} alt='stone' id='stone' />
            <img src={car} alt='Car' id='carabout' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About