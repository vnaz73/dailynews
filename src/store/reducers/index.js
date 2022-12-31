import { combineReducers } from 'redux';
import post from './post_reducer';
import user from './user_reducer';

const appReducers = combineReducers({
  post,
  user,
});

export default appReducers;
