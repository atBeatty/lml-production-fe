import { combineReducers } from 'redux'
import productionsReducer from './productionsReducer'
import productions from './productionsReducer'


export default combineReducers({
    productions: productionsReducer
})