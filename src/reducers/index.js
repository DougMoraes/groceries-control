import { combineReducers } from 'redux';
import groceriesReducer from './groceriesReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  groceries: groceriesReducer,
  selectedCategory: categoryReducer
})