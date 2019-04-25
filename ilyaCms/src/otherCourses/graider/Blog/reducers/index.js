import { combineReducers } from 'redux';
import postReducser from './postReducer';

export default combineReducers({
  posts: postReducser
});
