import questionThreadReducer from '../../reducers/questionthread';
import * as types from '../../actions/actionTypes';
import { answers } from '../testUtils/data';

describe('Single article reducer: ', () => {
  it('should have the correct default state', () => {
    expect(questionThreadReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      question: null,
      answers: null,
      comments: null
    });
  });

  it('should update the reducer state', () => {
    expect(questionThreadReducer(undefined, {
      type: types.GET_SINGLE_QUESTION_SUCCESS,
      payload: 'who'
    })).toEqual({
      question: 'who',
      answers: undefined,
      comments: undefined
    });
  });

  it('should update the reducer state', () => {
    expect(questionThreadReducer(undefined, {
      type: types.GET_SINGLE_QUESTION_FAILURE
    })).toEqual({
      question: null,
      answers: null,
      comments: null
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

  it('should update the reducer state', () => {
    expect(questionThreadReducer({
      question: {},
      answers
    }, {
      type: types.ACCEPT_ANSWER,
      payload: 2
    })).toEqual({
      question: {},
      answers
    });

    expect(questionThreadReducer({
      question: {},
      answers
    }, {
      type: types.ACCEPT_ANSWER,
      payload: 25
    })).toEqual({
      question: {},
      answers
    });
  });

  it('should update the reducer state', () => {
    expect(questionThreadReducer({
      question: {},
      comments: []
    }, {
      type: types.ADD_NEW_COMMENT,
      payload: {}
    })).toEqual({
      question: {},
      comments: [{}]
    });
  });

  it('should update the reducer state', () => {
    expect(questionThreadReducer({
      question: {},
      answers
    }, {
      type: types.UPVOTE_ANSWER,
      payload: 5
    })).toEqual({
      question: {},
      answers
    });
    expect(questionThreadReducer({
      question: {},
      answers
    }, {
      type: types.UPVOTE_ANSWER,
      payload: 2
    })).toEqual({
      question: {},
      answers
    });
  });

  it('should update the reducer state', () => {
    expect(questionThreadReducer({
      question: {},
      answers
    }, {
      type: types.DOWNVOTE_ANSWER,
      payload: 5
    })).toEqual({
      question: {},
      answers
    });
    expect(questionThreadReducer({
      question: {},
      answers
    }, {
      type: types.DOWNVOTE_ANSWER,
      payload: 2
    })).toEqual({
      question: {},
      answers
    });
  });
});
