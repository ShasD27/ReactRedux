const INCREMENT_COUNTER = 'INCREMENT_COUNTER' 
export const incrementCounter = (count) => {
    return {
        type: INCREMENT_COUNTER, 
        count
    }
}

const DECREMENT_COUNTER = 'DECREMENT_COUNTER' 
export const decrementCounter = (count) => {
    return {
        type: DECREMENT_COUNTER, 
        count
    }
}