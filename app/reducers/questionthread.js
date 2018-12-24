import * as types from '../actions/actionTypes';

const initalStates = {
  question: null,
  answers: null
};

const questionReducer = (state = initalStates, action) => {
  switch (action.type) {
  case types.GET_SINGLE_QUESTION_SUCCESS:
    state = {
      question: action.payload.question || action.payload,
      answers: action.payload.answers
    };
    break;
  case types.GET_SINGLE_QUESTION_FAILURE:
    state = {
      ...state
    };
    break;
  case types.ADD_NEW_ANSWER:
    state = {
      ...state,
      answers: [...state.answers, action.payload]
    };
    break;
  default:
    return state;
  }
  return state;
};

export default questionReducer;
