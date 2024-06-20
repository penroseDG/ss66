import { useSelector } from "react-redux"

export default function B1() {
    const stateB1 = useSelector((state:any)=>{
        return state
    })
  return (
    <div>
      {stateB1.B1.map((item:any)=>{
        return <li key={item.id}>
          <q />Id: {item.id}
          <q />Họ và tên: {item.userName}
          <q />Giới tính: {item.gender} 
          <q />Ngày sinh: {item.dateBirth}
          <q />Địa chỉ: {item.address}
        </li>
      })}
    </div>
  )
}