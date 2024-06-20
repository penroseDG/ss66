import Count from './component/Count'
import Job from './component/Job'
import B2 from './component/BTVN/B2'
import B4 from './component/BTVN/B4'
import B5 from './component/BTVN/B5'
import B6 from './component/BTVN/B6'
import B78 from './component/BTVN/B78'

export default function App() {
  return (
    <div>
      /*
      Redux :là 1 thư viện giúp cho có thể quản lí dữ liệu tập trung
      giúp tạo 1 cái kho dữ liệ tập trung
      các component muốn tương tác với dữ liệu thì tương tác trực tiếp
      không cần phải truyền dữ liệu các component
      redux là 1 thư viện , react js cũng là thư viện
      redux có thê kết hợp với nhiều thư viện khác , có thể kết hợp với js thuần
      chứ không phải redux là của react sinh ra
      1. cài đặt kho chứa dữ liệu của redux
      - xem các bước cài đặt như thế nào
      - nhớ thứ tự luồng chạy của nó
      B1. cài đặt 2 thư viện 
       + react - redux 
       + redux 
       sau khi cài xong vào package.json xem có chưa 
      B2. thiết lập store 
      - Bên trong store chứa nhiều reducer 
      - reducer là gì ?
        + reducer bản chất là những hàm , function thôi 
        + nhiệm vụ của reducer là tính toán , xử lí trả về state mới 
      B3. tạo store 
        + import createStore from "redux"
        + import hàm reducer vào 

      2. tương tác dữ liệu kho chứa đấy
        - lấy ra state dùng thì dùng useSelector 
        - bắn action thì dùng useDispatch
      */
      <Count></Count>
      <Job></Job>
       <B2></B2>
       <B4></B4>
       <B5></B5>
       <B6></B6>
       <B78></B78>
      
    </div>
  )
}
