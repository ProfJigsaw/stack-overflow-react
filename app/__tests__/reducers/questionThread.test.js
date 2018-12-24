import questionThreadReducer from '../../reducers/questionthread';
import * as types from '../../actions/actionTypes';

describe('Single article reducer: ', () => {
  it('should have the correct default state', () => {
    expect(questionThreadReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      question: null,
      answers: null
    });
  });

  it('should update the reducer state', () => {
    expect(questionThreadReducer(undefined, {
      type: types.GET_SINGLE_QUESTION_SUCCESS,
      payload: 'who'
    })).toEqual({
      question: 'who',
      answers: undefined
    });
  });

  it('should update the reducer state', () => {
    expect(questionThreadReducer(undefined, {
      type: types.GET_SINGLE_QUESTION_FAILURE
    })).toEqual({
      question: null,
      answers: null
    });
  });

  it('should update the reducer state', () => {
    expect(questionThreadReducer({
      question: {},
      answers: []
    }, {
      type: types.ADD_NEW_ANSWER,
      payload: {}
    })).toEqual({
      question: {},
      answers: [{}]
    });
  });
});
