import { combineReducers } from 'redux';
import questionReducer from './questions';
import questionThreadReducer from './questionthread';
import profileReducer from './profile';

export default combineReducers({
  questions: questionReducer,
  questionThread: questionThreadReducer,
  profile: profileReducer
});
