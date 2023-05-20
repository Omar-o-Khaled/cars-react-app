import React, { useState, useEffect } from 'react'

import shopping from '../../../public/assets/shopping.png'
import Cart from '../cart/cart';
import Model from '../model/model';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllItems } from '../../redux/counterSlice';

const Shopping = () => {
    const [showDelete, setShowDelete] = useState(false)
    let items = useSelector(state => state.counter.items)
    let totalCount = useSelector(state => state.counter.totalCount)
    const dispatch = useDispatch()
    if (window.localStorage.getItem('totalCount')) {
        totalCount = localStorage.getItem('totalCount')
    }
    function crathandle() {
        let portal = document.querySelector('.portal-container')
        portal.classList.toggle('showportal')
    }
    function DeleteAllItems() {
        dispatch(removeAllItems())
        setShowDelete(false)
    }
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('sliceitems'))) {
            if (JSON.parse(localStorage.getItem('sliceitems')).length > 0) {
                setShowDelete(true)

            } else {
                setShowDelete(false)
            }
        }
    }, [items])

    return (

        <div id='basket'>
            <div onClick={crathandle}  >
                <img src={shopping} alt='sopping-cart-img' />
                <p id='itemscount'>{totalCount}</p>
            </div>
            <Model>
                <Cart />
                {showDelete && <button className='deleteAll' onClick={DeleteAllItems}>Delete All <ion-icon name="trash-outline"></ion-icon></button>}
            </Model>
        </div>

    )
}

export default Shopping
