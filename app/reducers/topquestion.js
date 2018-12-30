import * as types from '../actions/actionTypes';

const initalStates = {
  question: null,
  answerCount: null,
  loading: false,
  error: false
};

const topQuestionReducer = (state = initalStates, action) => {
  switch (action.type) {
  case types.TOP_QUESTION_REQUEST:
    state = {
      ...state,
      error: false,
      loading: true
    };
    break;
  case types.TOP_QUESTION_SUCCESS:
    state = {
      ...state,
      question: action.payload.question,
      answerCount: action.payload.count,
      error: false,
      loading: false
    };
    break;
  case types.TOP_QUESTION_FAILURE:
    state = {
      ...state,
      question: [],
      error: true,
      loading: false
    };
    break;
  default:
    return state;
  }
  return state;
};

export default topQuestionReducer;
