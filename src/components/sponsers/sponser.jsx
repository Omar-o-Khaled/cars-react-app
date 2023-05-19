import React from 'react'
import sponserobj from '../../cars.json';
import './sponser.css';

const Sponser = () => {
    const productsArray = sponserobj.sponsers;
    return (
        <div className='sponser'>
            {productsArray.map(obj => {
                return (
                    <img src={obj.photo} alt={obj.title} title={obj.title} key={obj.id} />
                )
            })}
        </div>
    )
}

export default Sponser