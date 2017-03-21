/**
 * Created by hoale on 3/20/2017.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
const  rootReducer = combineReducers({
  courses,
  authors
});
export default rootReducer;
