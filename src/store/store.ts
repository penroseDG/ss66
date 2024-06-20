import {combineReducers, createStore} from 'redux'
import countReducer from "./reducers/countReducer";
import jobReducer from "./reducers/todolistReducer";
import B1 from "../component/BTVN/B1";
import B7 from "../component/BTVN/B78";
import B2 from "../component/BTVN/B2";
import B6 from "../component/BTVN/B6";
import B5 from "../component/BTVN/B5";
import B4 from "../component/BTVN/B4";
import B3 from "../component/BTVN/B3";
;const rootReducer = combineReducers({
    B7,
    B1,
    B2,
    B3,
    B4,
    B5,
    B6,
    countReducer , 
    jobReducer,
})
const store = createStore(rootReducer);
export default store; 
