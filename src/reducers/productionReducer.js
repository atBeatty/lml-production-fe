

export default (state={}, action) => {
    switch(action.type) {
        case 'SET_PRODUCTION':
            return action.payload
        case 'ADD_CREWMEMBER':
            // console.log("ADDCREW MEMBER", action.payload, state)
            // state.crew_members.push(action.payload)
            return  {...state, crew_members: [...state.crew_members, action.payload]}
        case 'REMOVE_CREWMEMBER':
            let newCrew = state.crew_members.filter(member => member.id !== action.payload.id)
            return {...state, crew_members: newCrew}
        default:
            return state
    }
}