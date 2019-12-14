import groceriesAPI from '../api-config'
import {
  GET_GROCERIES_HISTORY
} from './types';

export const getGroceriesHistory = () => async dispatch => {
  const response = await groceriesAPI.get('/streams');

  dispatch({ type: GET_GROCERIES_HISTORY, payload: response.data });
}