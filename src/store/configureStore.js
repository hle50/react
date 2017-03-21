/**
 * Created by hoale on 3/20/2017.
 */
import {createStore, applyMiddleware} from 'redux';
import  rootReducer from '../reducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
