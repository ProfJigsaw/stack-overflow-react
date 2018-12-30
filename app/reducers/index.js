import { combineReducers } from 'redux';
import questionReducer from './questions';
import questionThreadReducer from './questionthread';
import profileReducer from './profile';
import searchReducer from './search';
import topQuestionReducer from './topquestion';

export default combineReducers({
  questions: questionReducer,
  questionThread: questionThreadReducer,
  profile: profileReducer,
  search: searchReducer,
  topQuestion: topQuestionReducer
});
