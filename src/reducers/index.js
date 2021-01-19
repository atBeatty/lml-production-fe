import { combineReducers } from 'redux'
import productionsReducer from './productionsReducer'
import crewMembersReducer from './crewMembersReducer'



export default combineReducers({
    productions: productionsReducer,
    crewMembers: crewMembersReducer
})