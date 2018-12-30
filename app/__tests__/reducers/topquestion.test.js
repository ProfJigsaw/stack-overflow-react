import topQuestionReducer from '../../reducers/topquestion';
import * as types from '../../actions/actionTypes';

const initialState = {
  question: null,
  answerCount: null,
  loading: false,
  error: false
};

describe('Single article reducer: ', () => {
  it('should have the correct default state', () => {
    expect(topQuestionReducer(undefined, {
      type: 'non-existent type'
    })).toEqual(initialState);
  });

  it('should update the reducer state', () => {
    expect(topQuestionReducer(undefined, {
      type: types.TOP_QUESTION_REQUEST
    })).toEqual({
      ...initialState,
      error: false,
      loading: true
    });
  });

  it('should update the reducer state with an error message', () => {
    expect(topQuestionReducer(undefined, {
      type: types.TOP_QUESTION_SUCCESS,
      payload: {
        question: {},
        count: 4
      }
    })).toEqual({
      ...initialState,
      question: {},
      answerCount: 4,
      error: false,
      loading: false
    });
  });

  it('should update the reducer state with an error message', () => {
    expect(topQuestionReducer(undefined, {
      type: types.TOP_QUESTION_FAILURE,
    })).toEqual({
      ...initialState,
      question: [],
      error: true,
      loading: false
    });
  });
});
