const initialState = {
    counter: 0,
    number: 10,
    isLoading: false,
    users: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Increase_Counter':
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case 'Decrease_Counter':
            return {
                ...state,
                counter: state.counter >= action.payload ? state.counter - action.payload : state.counter
            }

        case 'Increase_Number':
            return {
                ...state,
                number: state.number + action.payload
            }
        case 'Decrease_Number':
            return {
                ...state,
                number: state.number >= action.payload ? state.number - action.payload : state.number
            }

        default:
            return state
    }
}

export default reducer;