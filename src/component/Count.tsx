import React from 'react'
import {useSelector , useDispatch} from 'react-redux'

export default function Count() {
    const countState : any = useSelector(state => {
        return state  ;
    }
    )
    const dispatch = useDispatch();
    const increase = () => {
        dispatch({
            type : 'INCREASE'
           
        })
    }
    const decrease = () => {
        dispatch({
            type : 'DECREASE'
           
        })
    }
    // console.log(11111, countState); 
    return (
        <div>
            Count
            <p> giá trị biến count : {countState.countReducer } </p>
            <button onClick={increase}> tăng </button>
            <button onClick={decrease}> giảm </button>
        </div>
    )
}
