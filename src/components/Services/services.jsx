import React from 'react'
import bluecar from '../../../public/assets/carbluese.png';
import star from '../../../public/assets/icon_1.png';
import rental from '../../../public/assets/icon_2.png';
import diamond from '../../../public/assets/icon_3.png';
import './services.css'

const Services = () => {
  return (
    <div className='services'>
      <div className='container'>
        <img src={bluecar} alt='blue car' id='bluecar' />
        <div className='headingContainer'>
          <div className='textground'>Services</div>
          <h2 className='heading'>Services</h2>
        </div>
        <div className='servicesText'>
          <div className='Box'>
            <img src={star} alt='star icon' className='icon' />
            <h3>Car sales</h3>
            <p>At YourCar, we offer a wide selection of luxury vehicles for sale. Whether you're in the market for a sleek sports car or a spacious SUV, we have the perfect vehicle to fit your needs.</p>
          </div>
          <div className='Box'>
            <img src={rental} alt='star icon' className='icon' />
            <h3>Car rental</h3>
            <p>If you're in need of a luxury car rental, look no further than YourCar. Our fleet of high-end vehicles is regularly maintained and serviced to ensure that you have a safe and comfortable driving experience.</p>
          </div>
          <div className='Box'>
            <img src={diamond} alt='diamond icon' className='icon' />
            <h3>Car selling</h3>
            <p> At YourCar, we make it easy to sell your car. Simply bring your vehicle in for an appraisal, and we'll handle the rest. We offer fair prices and a hassle-free selling process, so you can get  your vehicle with minimal effort.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services