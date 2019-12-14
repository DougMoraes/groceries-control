import { combineReducers } from 'redux';
import groceriesReducer from './groceriesReducer'

export default combineReducers({
  groceries: groceriesReducer
})