const b4:number=0;
const B4=(state=b4, action:any)=>{
    switch (action.type) {
        case "INCREASE":
            return state+1;
        case "DECREASE":
            return state-1;
        default:
            return state
    }
}
export default B4;