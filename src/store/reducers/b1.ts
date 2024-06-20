import {B1interface} from '../../component/BTVN/B1'

const inititalb1: B1interface[]=[
    {
        id:1, 
        userName:" penrose ",
        gender:"Nam",
        dateBirth:"16122004", 
        address:" thái bình "
    },
    {
        id:2, 
        userName:" penrose ",
        gender:"Nam",
        dateBirth:"16122004", 
        address:" thái bình "
    }
]
const B1Reducer=(state=inititalb1)=>{
    return state;
}
export default B1Reducer;