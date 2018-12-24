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
