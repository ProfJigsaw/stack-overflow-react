import * as actions from '../../actions/actions';
import * as types from '../../actions/actionTypes';

describe('Actions:', () => {
  it('should return the correct values', () => {
    expect(actions.addNewAnswerToStore('a')).toEqual({
      type: types.ADD_NEW_ANSWER,
      payload: 'a'
    });
  });

  it('should return the correct values', () => {
    expect(actions.getAllQuestions()).toEqual({
      type: types.GET_ALL_QUESTIONS
    });
  });

  it('should return the correct values', () => {
    expect(actions.getSingleQuestion(4)).toEqual({
      type: types.GET_SINGLE_QUESTION,
      payload: 4
    });
  });

  it('should return the correct values', () => {
    expect(actions.userProfileRequest()).toEqual({
      type: types.USER_PROFILE_REQUEST
    });
  });

  it('should return the correct values', () => {
    expect(actions.searchRequest('a')).toEqual({
      type: types.SEARCH_REQUEST,
      payload: 'a'
    });
  });

  it('should return the correct values', () => {
    expect(actions.topQuestionRequest()).toEqual({
      type: types.TOP_QUESTION_REQUEST
    });
  });

  it('should return the correct values', () => {
    expect(actions.upvoteAnswer(4)).toEqual({
      type: types.UPVOTE_ANSWER,
      payload: 4
    });
  });

  it('should return the correct values', () => {
    expect(actions.downVote(4)).toEqual({
      type: types.DOWNVOTE_ANSWER,
      payload: 4
    });
  });

  it('should return the correct values', () => {
    expect(actions.addComment(4)).toEqual({
      type: types.ADD_NEW_COMMENT,
      payload: 4
    });
  });

  it('should return the correct values', () => {
    expect(actions.acceptAnswer(4)).toEqual({
      type: types.ACCEPT_ANSWER,
      payload: 4
    });
  });
});
