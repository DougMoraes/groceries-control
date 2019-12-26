import {
  GET_GROCERIES_HISTORY,
  ADD_GROCERIES_REGISTRY
} from '../actions/types';

export default (groceries = [], action) => {
  switch (action.type) {
    case GET_GROCERIES_HISTORY:
      return action.payload ? action.payload : [] ;
    case ADD_GROCERIES_REGISTRY:
      return action.payload ; 
    default:
      return groceries;
  }
}