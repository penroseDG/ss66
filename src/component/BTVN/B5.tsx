import { useDispatch, useSelector } from 'react-redux'

export default function B5() {
    const countState:any= useSelector(state=>{
        return state
    })
    console.log("ú òa",countState);
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch({
            type: "ADD"
        })
    }
  return (
    <div>
        <p>[{countState.B5}]</p>
        <button onClick={handleClick}>random numbers</button>
    </div>
  )
}