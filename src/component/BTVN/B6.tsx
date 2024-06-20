import { useDispatch, useSelector } from 'react-redux'

export default function B6() {
    const textB6:any= useSelector(state=>{
        return state
    })
    console.log('IM BA RA SING ',textB6);
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch({
            type: "RikkeiSoft"
        })
    }
  return (
    <div>
        <p>{textB6.B6}</p>
        <button onClick={handleClick}>Thay đổi chữ</button>
    </div>
  )
}