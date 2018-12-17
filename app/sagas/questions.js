import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionTypes';

/**
 * Function to return all
 * questions from the database
 * @returns {object} questions
 */
const getQuestions = () => {
  return axios.get('https://nvc-stackqa.herokuapp.com/api/v1/questions');
};

/**
 * Function to return a single
 * question from the database
 * @returns {object} questions
 */
const getSingleQuestion = (id) => {
  return axios.get(`https://nvc-stackqa.herokuapp.com/api/v1/questions/${id}`);
};

/**
 * Generator function to make
 * async call and dispatch neccessary actions
 */
function* fetchQuestionsAsync() {
  try {
    const response = yield call(getQuestions);
    yield put({
      type: types.GET_ALL_QUESTIONS_SUCCESS,
      questions: response.data.questions.reverse()
    });
  } catch (error) {
    yield put({
      type: types.GET_ALL_QUESTIONS_FAILURE,
    });
  }
}

/**
 * Generator function to watch the request
 * to get all questions
 */
export function* watchFetchQuestions() {
  yield takeEvery(types.GET_ALL_QUESTIONS, fetchQuestionsAsync);
}

/**
 * Function to make async call to
 * get a single question
 * @param {object} action
 */
function* fetchSingleQuestionAsync(action) {
  try {
    const response = yield call(() => getSingleQuestion(action.id));
    if (response.data.data.answers) {
      yield put({
        type: types.GET_SINGLE_QUESTION_SUCCESS,
        payload: response.data.data
      });
    } else {
      yield put({
        type: types.GET_SINGLE_QUESTION_SUCCESS,
        payload: response.data.data.reverse()
      });
    }
  } catch (error) {
    yield put({
      type: types.GET_SINGLE_QUESTION_FAILURE,
    });
  }
}

/**
 * Saga to watch request for single questions
 */
export function* watchFetchSingleQuestion(type, action) {
  yield takeEvery(types.GET_SINGLE_QUESTION, fetchSingleQuestionAsync);
}
