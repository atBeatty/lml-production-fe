

export default (state=[], action) => {
    switch(action.type) {
        case 'REMOVE_MEMBER':
            return [...action.payload]
        
        default:
            return state
    }
}