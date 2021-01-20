

export default (state={}, action) => {
    switch(action.type) {
        case 'SET_PRODUCTION':
            return action.payload
        default:
            return state
    }
}