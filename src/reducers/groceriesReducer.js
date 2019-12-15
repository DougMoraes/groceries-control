import {
  GET_GROCERIES_HISTORY
} from '../actions/types';

export default (groceries = [], action) => {
  switch (action.type) {
    case GET_GROCERIES_HISTORY:
      return action.payload ? action.payload : [] ; 
    default:
      return groceries;
  }
}