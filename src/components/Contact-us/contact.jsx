import React from 'react'
import './contact.css';
const Contact = () => {
  return (
    <footer>
      <div className='container'>
        <div className='allsections'>
          <section>
            <h2>YourCar</h2>
            <span>We are known for luxurious and premium chaffeur services worldwide. We are simply the best you can find.</span>
            <span> we are dedicated to providing our customers with a first-class car buying, selling, and renting experience.</span>
          </section>

          <section>
            <h3>News Letter</h3>
            <p>Subscribe to our news letter for updates, news and exclusive offers</p>
            <form>
              <input type='email' required placeholder='Email' />
              <input type='submit' value='Subscribe' />
            </form>
            <div className='social'>
              <a href='https://web.facebook.com/omr.khaled.94' target='_blank' id='facebook'><ion-icon name="logo-facebook"></ion-icon></a>
              <a href='https://www.instagram.com/omar_khale_d/' target='_blank' id='instagram'><ion-icon name="logo-instagram"></ion-icon></a>
              <a href='https://www.linkedin.com/in/omar-khaled-07b850216/' target='_blank' id='linkedin'><ion-icon name="logo-linkedin"></ion-icon></a>
            </div>
          </section>
          <section>
            <h3>Contact</h3>
            <div className='information'>
              <div className='location'>
                <a href='#' className='infocontainer' target="_blank">
                  <span className='ion'><ion-icon name="location-outline" className='icon'></ion-icon></span>
                  <span>2038 2nd Avenue, Las Vegas, United States</span>
                </a>
              </div>
              <div className='phone'>
                <a href='https://wa.me/+201148069178' target="_blank" className='infocontainer'>
                  <span className='ion'><ion-icon name="call-outline" className='icon'></ion-icon></span>
                  <span>0201148069178</span>
                </a>
              </div>
              <div className='email'>
                <a href="mailto:ok020190@gmail.com" className='infocontainer'>
                  <span className='ion'><ion-icon name="mail-outline" className='icon'></ion-icon></span>
                  <span>ok020190@gmail.com</span>
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className='copyright'>

          &copy; Copyright {(new Date()).getFullYear()} ·
          <h4>YourCar</h4>All rights reserved

        </div>
      </div>
    </footer>
  )
}

export default Contact