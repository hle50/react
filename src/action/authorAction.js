/**
 * Created by hoale on 3/20/2017.
 */
import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';
export function loadAuthorSuccess(authors) {
  return {type: types.LOAD_AUTHOR_SUCCESS, authors}
}
export function loadAuthors() {
  return function (dispatch) {
    return authorApi.getAllAuthors().then(courses => {
      dispatch(loadAuthorSuccess(courses))
    }).catch(error => {
      throw(error);
    })
  }
}
