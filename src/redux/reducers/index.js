  
import { combineReducers } from 'redux'
import { employeeReducer } from './reducer'

const rootReducer = combineReducers({ employeeReducer })

export default rootReducer
// 