// khởi tạo State 
import { Job } from "../../interface";
const initialJob : Job[] = [
    {
        id: 1,
        name: "mai",
        status: true,
    },
    {
        id: 2,
        name: "duc",
        status: false,

    }
]
// khởi tạo hàm reducer 
const jobReducer=(state=initialJob , action : any )=>{
    switch (action.type) {
        case "ADD":
            return [...state];
        case "DELETE":
            return [...state];
        case "UPDATE":
            return [...state];
        case "SEARCH":
            return [...state];
        case "SORT":
            return [...state];
        case "FILTER":
            return [...state];
        default:
            return state;
    }
}
export default jobReducer ; 