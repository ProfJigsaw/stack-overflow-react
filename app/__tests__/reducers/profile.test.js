import profileReducer from '../../reducers/profile';
import * as types from '../../actions/actionTypes';
import { questions, answers } from '../testUtils/data';

const iniialState = {
  questions: [],
  answers: [],
  topQuestion: [],
  loaded: false,
  error: false
};

describe('Single article reducer: ', () => {
  it('should have the correct default state', () => {
    expect(profileReducer(undefined, {
      type: 'non-existent type'
    })).toEqual(iniialState);
  });

  it('should update the reducer state', () => {
    expect(profileReducer(undefined, {
      type: types.USER_QUESTIONS_SUCCESS,
      payload: {
        questions,
        answers
      }
    })).toEqual({
      ...iniialState,
      loaded: true
    });
  });

  it('should update the reducer state with an error message', () => {
    expect(profileReducer(undefined, {
      type: types.USER_QUESTIONS_FAILURE,
      payload: {
        questions,
        answers
      }
    })).toEqual({
      ...iniialState,
      error: true
    });
  });
});
