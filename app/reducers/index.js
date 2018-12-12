import { combineReducers } from 'redux';
import questionReducer from './questions';
import questionThreadReducer from './questionthread';

export default combineReducers({
  questions: questionReducer,
  questionThread: questionThreadReducer
});
