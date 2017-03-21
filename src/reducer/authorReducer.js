/**
 * Created by hoale on 3/20/2017.
 */
import * as types from '../action/actionTypes';
import initialState from './initialState';
export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {

    case types.LOAD_AUTHOR_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
