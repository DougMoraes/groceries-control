import groceriesAPI from '../api-config'
import {
  GET_GROCERIES_HISTORY,
  SELECT_CATEGORY
} from './types';

export const getGroceriesHistory = () => async dispatch => {
  const response = await groceriesAPI.get('/groceries');

  dispatch({ type: GET_GROCERIES_HISTORY, payload: response.data });
}

export const selectCategory = (category) => {
  return { type: SELECT_CATEGORY, payload: category };
}