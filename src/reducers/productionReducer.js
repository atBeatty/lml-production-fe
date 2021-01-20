

export default (state={}, action) => {
    switch(action.type) {
        case 'SET_PRODUCTION':
            return action.payload      
        case 'ADD_CREWMEMBER':
            // console.log("ADDCREW MEMBER", action.payload, state)
            // state.crew_members.push(action.payload)
            return  {...state, crew_members: [...state.crew_members, action.payload]}
        default:
            return state
    }
}