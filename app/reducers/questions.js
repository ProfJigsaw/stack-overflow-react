import * as types from '../actions/actionTypes';

const initalStates = {
  questions: []
};

const questionReducer = (state = initalStates, action) => {
  switch (action.type) {
  case types.GET_ALL_QUESTIONS_SUCCESS:
    state = {
      questions: action.questions
    };
    break;
  case types.GET_ALL_QUESTIONS_FAILURE:
    state = {
      questions: []
    };
    break;
  case types.DELETE_QUESTION:

    state = {
      questions: state.questions
        .filter(question => question.questionid !== parseInt(action.payload, 0))
    };
    break;
  default:
    return state;
  }
  return state;
};

export default questionReducer;
