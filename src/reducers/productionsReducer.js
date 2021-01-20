

export default (state=[], action) => {
    switch(action.type) {
        case 'SET_PRODUCTIONS':
            return [...action.payload]
        
        case 'ADD_PRODUCTION':
            return [...state, action.payload]
        
        case 'ADD_CREW':
            
            return [...state, action.payload]
        default:
            return state
    }
}