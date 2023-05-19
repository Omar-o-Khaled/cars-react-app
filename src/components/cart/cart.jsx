import React, { useEffect, useRef, useState } from 'react';
import './cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove, decreseItem, storageSlice } from '../../redux/counterSlice';

const Cart = () => {

    let items = useSelector(state => state.counter.items);
    let totalCount = useSelector(state => state.counter.totalCount);
    const dispatch = useDispatch()

    function cartAddFunction(ele) {
        let idSelected = ele.target.closest('.cartItem').id;
        let indexId;

        items.map((obj, i) => {
            if (obj.id == idSelected) {
                indexId = i
            }
        })

        dispatch(add(items[indexId]))
    }
    function cartremoveFunction(ele) {
        let idSelected = ele.target.closest('.cartItem').id;
        let indexId;
        items.map((obj, i) => {
            if (obj.id == idSelected) {
                indexId = i
            }
        })
        if (items[indexId].count > 1) {
            dispatch(decreseItem(items[indexId]))
        } else {
            dispatch(remove(items[indexId]))

        }

    }
    function submitHandler(event) {
        event.preventDefault();
    }
    function removeThisItem(ele) {
        if (ele.target.closest('.cartItem')) {
            let idSelected = ele.target.closest('.cartItem').id;
            let indexId;
            items.map((obj, i) => {
                if (obj.id == idSelected) {
                    indexId = i
                }
            })
            dispatch(remove(items[indexId]))
        }
    }
    useEffect(() => {
        if (window.localStorage.getItem('sliceitems')) {
            items = JSON.parse(window.localStorage.getItem('sliceitems'));
            totalCount = JSON.parse(window.localStorage.getItem('totalCount'));
            dispatch(storageSlice({ items: items, totalCount: totalCount }))

        }
    }, [])

    return (
        <>
            <ul className="cart">
                {items.map(obj => {
                    return (<li key={obj.id} className='cartItem' id={obj.id} >
                        <div className='cartText'>
                            <h2>{obj.class}</h2>
                            <h6>{obj.name}</h6>
                            <div className="controlsCrat" onSubmit={submitHandler}>
                                <button className="remove" onClick={cartremoveFunction} >-</button>
                                <p id="countCart">{+obj.count}</p>
                                <button className="add" onClick={cartAddFunction}>+</button>
                            </div>
                        </div>
                        <div className='cartImg'><img src={obj.image} alt='imgCar' /></div>
                        <div className='removeitem' onClick={removeThisItem}><ion-icon name="trash-outline"></ion-icon></div>
                    </li>
                    )
                })}
            </ul>
        </>);
};

export default Cart;
