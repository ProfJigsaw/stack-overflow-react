import * as types from './actionTypes';

export const getAllQuestions = () => ({
  type: types.GET_ALL_QUESTIONS
});

export const getSingleQuestion = id => ({
  type: types.GET_SINGLE_QUESTION,
  payload: id
});

export const addNewAnswerToStore = input => ({
  type: types.ADD_NEW_ANSWER,
  payload: input
});

export const userProfileRequest = () => ({
  type: types.USER_PROFILE_REQUEST
});

export const searchRequest = payload => ({
  type: types.SEARCH_REQUEST,
  payload
});

export const topQuestionRequest = () => ({
  type: types.TOP_QUESTION_REQUEST
});

export const upvoteAnswer = id => ({
  type: types.UPVOTE_ANSWER,
  payload: id
});

export const downVote = id => ({
  type: types.DOWNVOTE_ANSWER,
  payload: id
});

export const addComment = comment => ({
  type: types.ADD_NEW_COMMENT,
  payload: comment
});

export const acceptAnswer = id => ({
  type: types.ACCEPT_ANSWER,
  payload: id
});
