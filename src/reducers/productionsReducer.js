

export default (state=[], action) => {
    switch(action.type) {
        case 'SET_PRODUCTIONS':
            return [...action.payload]
        case 'ADD_PRODUCTION':

            if(!!action.payload.id) {
                
                return [...state, action.payload]
            } else {
                return action.payload
            }
        
        case 'ADD_CREW':
            
            return [...state, action.payload]
        default:
            return state
    }
}