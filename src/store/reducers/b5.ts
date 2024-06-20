const b5:number[]=[];
const B5=(state=b5, action:any)=>{
    switch (action.type) {
        case "themSo":{
            const NumberRandom=(Math.floor(Math.random()*9));
            state.push(NumberRandom);
            return [...state,NumberRandom,' ,']
        }
        default:
            return [...state];
    }
}
export default B5;