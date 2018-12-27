import * as types from '../actions/actionTypes';
import { getUserId } from '../utilities/auth';

const initalStates = {
  questions: [],
  answers: [],
  topQuestion: [],
  loaded: false,
  error: false
};

const profileReducer = (state = initalStates, action) => {
  switch (action.type) {
  case types.USER_QUESTIONS_SUCCESS:
    state = {
      ...state,
      error: false,
      loaded: true,
      questions: action.payload.questions.filter(
        question => parseInt(question.userid, 10) === parseInt(getUserId(), 10)
      ),
      answers: action.payload.answers.filter(
        answer => parseInt(answer.userid, 10) === parseInt(getUserId(), 10)
      )
    };
    break;
  case types.USER_QUESTIONS_FAILURE:
    state = {
      ...state,
      error: true
    };
    break;
  default:
    return state;
  }
  return state;
};

export default profileReducer;
