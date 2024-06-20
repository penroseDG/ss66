const text:string ='Rikkei Academy';
const B6=(state=text, action:any)=>{
    switch (action.type) {
        case "RikkeiSoft":
            return 'Rikkei Soft';
        default:
            return state
    }
}
export default B6;