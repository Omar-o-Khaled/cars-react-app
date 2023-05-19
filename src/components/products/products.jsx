import React from 'react'
import carsImges from '../../cars.json';
import Imghover from './imghover';
import './products.css';

const Products = () => {
    const carsArray = carsImges.cars
    return (
        <div className='carsimages'>
            <div className='container'>
                {carsArray.map(carObj => {
                    return (
                        <div className='imgcontainer' key={carObj.id}>
                            <img src={carObj.photo} alt='img' />
                            <Imghover description={carObj.describtion} name={carObj.title} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products