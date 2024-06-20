import { useDispatch, useSelector } from 'react-redux'

export default function B78() {
    const colorB78:any=useSelector(state=>{
        return state
    })
    console.log("heheh",colorB78);
    const dispatch=useDispatch();
    const handleChange=()=>{
        dispatch({
            type:"changeColor"
        })
    }
  return (
    <div style={{background:`${colorB78.B78 ? "black" : "white"}`}}>
        <input type="checkbox" onChange={handleChange}/>
        <p style={{color:`${colorB78.B78 ? "white" : "black"}`}}>
            {colorB78.B78 ? "Tối" : "Sáng"}
        </p>
    </div>
  )
}