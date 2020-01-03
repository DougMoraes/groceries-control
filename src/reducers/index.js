import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import groceriesReducer from './groceriesReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  groceries: groceriesReducer,
  selectedCategory: categoryReducer,
  form: form
})