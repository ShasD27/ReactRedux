const initialState = {
    userList: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USERLIST_LOADED" : 
        return {
            ...state, 
            userList: action.data.data
        }
        default :
        return state
    }
}

export default userReducer