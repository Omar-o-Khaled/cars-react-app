import React, { useContext } from 'react';
import { context } from '../../App';
import seats from '../../assets/seats.png';
import luggage from '../../assets/luggage.png';
import Controls from './controls';
import './arrow.js'

import './cars.css';



const Cars = () => {
  const carsArray = useContext(context);

  const elements = (
    <div>
      <div className="container headingContainer">
        <div className="textground">Cars</div>
        <h2 className="heading">Cars</h2>
      </div>
      <div className="allBoxs container">
        <div className='arrows'>
          <p className='left'><ion-icon name="arrow-back-circle-outline"></ion-icon></p>
          <p className='right'><ion-icon name="arrow-forward-circle-outline"></ion-icon></p>
        </div>
        <ul className="ulBoxsContainer" draggable>
          {carsArray.cars.map((obj, i) => {
            return (
              <li
                className="liCarBox"
                key={Math.random()}
                id={i}
                draggable
              >
                <div className="carIMGContainer">
                  <img
                    src={obj.image}
                    alt="car image"
                    className="carIMG"
                  />
                </div>
                <h3 className="type">{obj.class}</h3>
                <h6 className="name">{obj.name}</h6>
                <div className="description">{obj.description}</div>
                <div className="tools">
                  <div className="cardata">
                    <div className="seats">
                      <img
                        src={seats}
                        alt="seats img"
                      />
                      <div className="seats">{obj.seats} seats</div>
                    </div>
                    <div className="luggage">
                      <img
                        src={luggage}
                        alt="luggage img"
                      />
                      <div className="luggage">{obj.luggage} luggage</div>
                    </div>
                  </div>
                  <Controls carData={{ class: obj.class, name: obj.name, image: obj.image, id: i }} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

  return (<div className="cars">{elements}<div id='errorCount'><p id='errorText'></p></div></div>);
};

export default Cars;