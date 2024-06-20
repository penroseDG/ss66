
import {B3} from "../../component/BTVN/B3";

const b3:B3[]=[
    {
        id:1, 
        productName:'cam sành ', 
        price:23.000, 
        quantity:10
    },
    {
        id:2, 
        productName:' bưởi 3 roi ', 
        price:50.000, 
        quantity:15
    }
]

const B3Reducer=(state=b3)=>{
    return state;
}
export default B3Reducer;
