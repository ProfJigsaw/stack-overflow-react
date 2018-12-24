import questionReducer from '../../reducers/questions';
import * as types from '../../actions/actionTypes';

describe('Single article reducer: ', () => {
  it('should have the correct default state', () => {
    expect(questionReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      questions: []
    });
  });

  it('should update the reducer state', () => {
    expect(questionReducer(undefined, {
      type: types.GET_ALL_QUESTIONS_SUCCESS,
      questions: []
    })).toEqual({
      questions: []
    });
  });

  it('should update the reducer state', () => {
    expect(questionReducer(undefined, {
      type: types.GET_ALL_QUESTIONS_FAILURE
    })).toEqual({
      questions: []
    });
  });

  it('should update the reducer state', () => {
    expect(questionReducer({
      questions: [{
        title: 'dummy',
        questionid: 9
      }]
    }, {
      type: types.DELETE_QUESTION,
      payload: 8
    })).toEqual({
      questions: [{
        title: 'dummy',
        questionid: 9
      }]
    });
  });
});
