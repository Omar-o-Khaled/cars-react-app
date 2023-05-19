import React, { useContext, useReducer, useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove, add } from '../../redux/counterSlice'
import { stateConText } from '../../App'



const Controls = (props) => {
    let items = useSelector(state => state.counter.items)
    const totalCount = useSelector(state => state.counter.totalCount)

    const dispatch = useDispatch()
    const inputRef = useRef()

    function AddCarFunction() {
        let addedItem = { ...props.carData, count: +inputRef.current.value }
        dispatch(add(addedItem))
    }
    function RemoveCarFunction() {
        let addedItem = { ...props.carData, count: +inputRef.current.value }
        dispatch(remove(addedItem))
    }

    function submitHandler(event) {
        event.preventDefault()

    }
    return (
        <form className="controls" onSubmit={submitHandler}>
            <button className="remove" onClick={RemoveCarFunction} >-</button>
            <input type='number' defaultValue='1' min='1' id="count" ref={inputRef} />
            <button className="add" onClick={AddCarFunction}>+</button>
        </form>
    )
}

export default Controls