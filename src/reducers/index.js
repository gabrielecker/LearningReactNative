// All the reducers below
import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer'

export default combineReducers({
  posts: PostsReducer
});
