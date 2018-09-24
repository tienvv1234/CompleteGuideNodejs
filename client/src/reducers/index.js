import { combineReducers } from 'redux';
import authReducer from './authReducer';

console.log(8)
console.log('combineReducers')

export default combineReducers({
  auth: authReducer
});
