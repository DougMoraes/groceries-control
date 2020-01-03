import groceriesAPI from '../api-config'
import {
  GET_GROCERIES_HISTORY,
  SELECT_CATEGORY,
  ADD_GROCERIES_REGISTRY
} from './types';

export const getGroceriesHistory = () => async dispatch => {
  const response = await groceriesAPI.get('/groceries');

  dispatch({ type: GET_GROCERIES_HISTORY, payload: response.data });
}

export const selectCategory = (category) => {
  return { type: SELECT_CATEGORY, payload: category };
}

export const addGroceriesRegistry = formValues => async (dispatch) => {
  const response = await groceriesAPI.post('/groceries', { ...formValues });

  dispatch({ type: ADD_GROCERIES_REGISTRY, payload: response.data });
}