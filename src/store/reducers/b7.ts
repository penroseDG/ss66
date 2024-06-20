const color = false;
const B78Reducer = (state = color, action: any) => {
    switch (action.type) {
        case 'changeColor':
            return !state;
        default:
            return state;
    }
};
export default B78Reducer;