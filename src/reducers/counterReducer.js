const initialState = {
    count: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT_COUNTER": 
        return {
            ...state, 
            count: state.count + action.count
        }
        case "DECREMENT_COUNTER": 
        return {
            ...state, 
            count: state.count - action.count
        }
        default:
        return state
    }
}

export default counterReducer