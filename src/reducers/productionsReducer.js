

export default (state=[], action) => {
    switch(action.type) {
        case 'SET_PRODUCTIONS':
            return [...action.payload]
        case 'ADD_PRODUCTION':
            return [...state, action.payload]
        case 'ADD_CREWMEMBER':
            console.log("ADDCREW MEMBER", action.payload, state)
            return [...state, {crewMember: action.payload}]
        case 'ADD_CREW':
            
            return [...state, action.payload]
        default:
            return state
    }
}