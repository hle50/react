/**
 * Created by hoale on 3/20/2017.
 */
import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}
export function updateCourseSuccess(course){
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function createCourseSuccess(course){
  return {type: types.CREATE_COURSE_SUCCESS, course};
}
export function loadCourses() {
  return function (dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses))
    }).catch(error => {
      throw(error);
    })
  }
}
export function saveCourse(course){
  return function(dispatch, getState){
    return courseApi.saveCourse(course).then(saveCourse => {
      saveCourse.id ? dispatch(updateCourseSuccess(saveCourse)): dispatch(createCourseSuccess(saveCourse))
    }).catch(error => {
      throw (error)
    })
  }
}
