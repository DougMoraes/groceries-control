import {
  GET_GROCERIES_HISTORY
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_GROCERIES_HISTORY:
      return { ...state, groceries: action.payload }; 
    default:
      return state;
  }
}