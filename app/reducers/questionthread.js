import * as types from '../actions/actionTypes';

const initalStates = {
  question: null,
  answers: null,
  comments: null
};

const questionReducer = (state = initalStates, action) => {
  switch (action.type) {
  case types.GET_SINGLE_QUESTION_SUCCESS:
    state = {
      question: action.payload.question || action.payload,
      answers: action.payload.answers,
      comments: action.payload.comments
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
  case types.ACCEPT_ANSWER:
    state = {
      ...state,
      answers: state.answers.map((answer) => {
        if (answer.answerid === action.payload) {
          answer.state = true;
        }
        return answer;
      })
    };
    break;
  case types.ADD_NEW_COMMENT:
    state = {
      ...state,
      comments: [action.payload, ...state.comments]
    };
    break;
  case types.UPVOTE_ANSWER:
    state = {
      ...state,
      answers: state.answers.map((answer) => {
        if (answer.answerid === action.payload) {
          answer.upvotes += 1;
        }
        return answer;
      })
    };
    break;
  case types.DOWNVOTE_ANSWER:
    state = {
      ...state,
      answers: state.answers.map((answer) => {
        if (answer.answerid === action.payload) {
          answer.downvotes += 1;
        }
        return answer;
      })
    };
    break;
  default:
    return state;
  }
  return state;
};

export default questionReducer;
