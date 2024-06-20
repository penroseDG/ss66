interface UserState {
    id: number;
    userName: string;
    gender: string;
    dateBirth: string;
    address: string;
}

interface Action {
    type: string;
    payload: UserState[];
}

const initialState: UserState[] = [
    {
        id: 1,
        userName: 'vợ 2',
        gender: 'Nữ',
        dateBirth: '21/12/2004',
        address: 'Hà Nội',
    },
    {
        id: 2,
        userName: ' vợ vả',
        gender: 'Nữ',
        dateBirth: '20/11/2000',
        address: ' Nghệ An',
    },
];
const SET_USERS = 'SET_USERS';
export const setUsers = (users: UserState[]) => ({
    type: SET_USERS,
    payload: users,
});
const usersReducer = (state = initialState, action: Action): UserState[] => {
    switch (action.type) {
        case SET_USERS:
            return action.payload;
        default:
            return state;
    }
};
export default usersReducer;
