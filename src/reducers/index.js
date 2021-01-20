import { combineReducers } from 'redux'
import productionsReducer from './productionsReducer'
import crewMembersReducer from './crewMembersReducer'
import productionReducer from './productionReducer'



export default combineReducers({
    productions: productionsReducer,
    crewMembers: crewMembersReducer,
    production: productionReducer
})