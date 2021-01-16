

export default (state=[], action) => {
    switch(action.type) {
        case 'SET_PRODUCTIONS':
            // debugger
            return [...action.payload]
        case 'ADD_PRODUCTION':
            return [...state, action.payload]
        default:
            return state
    }
}