import React, { useContext, useEffect } from 'react'
import { context } from '../../App'
import blue from '../../assets/blue.png';
import './testimonials.css';

const Testimonials = () => {
    const value = useContext(context)
    const testimonials = value.testimonials;

    useEffect(() => {
        let activeNumber = 0;
        let circles = [...document.querySelectorAll('.circle')]
        let textEvaluation = [...document.querySelectorAll('.textEvaluation')]
        textEvaluation[activeNumber].id = 'activeEvalution'
        circles[activeNumber].id = 'activeCircle'
        setInterval(() => {
            textEvaluation[activeNumber].id = 'activeEvalution'
            circles[activeNumber].id = 'activeCircle'
            for (let i = 0; i < circles.length; i++) {
                if (i !== activeNumber) {
                    textEvaluation[i].id = ''
                    circles[i].id = ''
                }
            }
            activeNumber < circles.length - 1 ? activeNumber++ : activeNumber = 0;
        }, 3000)
        document.addEventListener('click', testimonialsFunction)

        function testimonialsFunction(ele) {
            if (ele.target.className == 'circle') {
                for (let i = 0; i < circles.length; i++) {
                    circles[i].id = ''
                }
                ele.target.id = 'activeCircle'
                for (let i = 0; i < circles.length; i++) {
                    if (circles[i].id === 'activeCircle') {
                        textEvaluation[i].id = 'activeEvalution';
                        activeNumber = i
                    } else {
                        textEvaluation[i].id = ''
                    }
                }
                setTimeout(() => {
                    document.querySelector('.carImg').id = 'carmotion'
                }, 100)
                setTimeout(() => {
                    document.querySelector('.carImg').id = ''
                }, 3000)
            }
        }

    })

    return (
        <div className='testimonials'>
            <div className='container'>
                <div className='headingContainer'>
                    <div className='textground'>Testimonials</div>
                    <h2 className='heading'>Testimonials</h2>
                </div>
                <div className='evaluation'>
                    <div className='textcontainer'>
                        {testimonials.map(obj => {
                            return (
                                <div className='textEvaluation' key={obj.id} >
                                    <div className='opinion' key={obj.id}>{obj.description}</div>
                                    <div className='stars'>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                    </div>
                                    <div className='info'>
                                        <h3 className='name'>{obj.name}</h3>
                                        <div className='country'>las vegas</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='carImg'>
                        <img src={blue} alt='img' />
                    </div>
                </div>
                <div className='polets'>
                    {testimonials.map(_ => {
                        return <span className='circle' key={Math.random()}></span>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Testimonials