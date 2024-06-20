import { useDispatch, useSelector } from 'react-redux'

export default function B4() {
    const countState:any= useSelector(state=>{
        return state
    })
    const count1=useSelector((state)=>{
        return state
    })
    console.log('1',count1);  
    console.log('1',countState);
    const dispatch=useDispatch();
    const icrease=()=>{
        dispatch({
            type: "INCREASE"
        })
    }
    const derease=()=>{
        dispatch({
            type: "DECREASE"
        })
    }
  return (
    <div>
        <p>giá trị biến count: {countState.countReducer}</p>
        <button onClick={icrease}>tăng</button>
        <button onClick={derease}>giảm</button>
    </div>
  )
}