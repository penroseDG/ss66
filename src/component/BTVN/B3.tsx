import { useSelector } from "react-redux"

export default function B3() {
    const stateB3 = useSelector((state:any)=>{
        return state
    })
  return (
    <div>
        <table border={1}>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Tên sản phẩm</td>
                    <td>Giá</td>
                    <td>Số lượng</td>
                    <td>Chức năng</td>
                </tr>
            </thead>
            <tbody>
                    {stateB3.B3.map((item:any)=>{
                        return  <tr>
                                    <td>{item.id}</td>
                                    <td>{item.productName}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td><button>sửa</button><button>xóa</button></td>
                                </tr>
                    })}
            </tbody>
        </table>
    </div>
  )
}