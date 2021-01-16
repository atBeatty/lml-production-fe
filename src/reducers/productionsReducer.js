

export default (state=[], action) => {
    switch(action.type) {
        case 'SET_PRODUCTIONS':
            // debugger
            return [...action.payload]
        default:
            return state
    }
}