import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import mode from '../utilities/mode';
import * as types from '../actions/actionTypes';

const getUserQuestions = () => axios
  .get('https://nvc-stackqa.herokuapp.com/api/v1/questions/stack/topquestion');

/**
 * Generator function to
 * dispatch profile actions
 */
function* userProfileWorker() {
  try {
    const { data } = yield call(getUserQuestions);
    yield put({
      type: types.USER_QUESTIONS_SUCCESS,
      payload: data
    });
  } catch (error) {
    yield put({
      type: types.USER_PROFILE_FAILURE
    });
  }
}

/**
 * Generator function to watch
 * for user profile requests
 */
export function* watchUserProfile() {
  yield takeLatest(types.USER_PROFILE_REQUEST, userProfileWorker);
}

/**
 * Generator function to
 * dispatch search actions
 * @param {string} action
 */
function* searchWorker(action) {
  try {
    const { data } = yield call(getUserQuestions);
    yield put({
      type: types.SEARCH_SUCCESS,
      payload: data.questions.filter(
        question => question.question
          .toLowerCase()
          .indexOf(action.payload.toLowerCase()) !== -1
        || question.title
          .toLowerCase()
          .indexOf(action.payload.toLowerCase()) !== -1
      )
    });
  } catch (error) {
    yield put({
      type: types.SEARCH_FAILURE
    });
  }
}


/**
 * Generator function to watch
 * for user search requests
 */
export function* watchSearchRequest() {
  yield takeLatest(types.SEARCH_REQUEST, searchWorker);
}

/**
 * Worker generator function to make
 * API call and dispatch the necessary actions
 * upon completion of the frontend processing.
 */
function* topQuestionWorker() {
  try {
    const { data } = yield call(getUserQuestions);
    const allaid = data.answers.map(answer => answer.questionid);
    const modeId = mode(allaid);
    const topQuestion = data
      .questions.filter(question => question.questionid === modeId);
    const payload = {
      question: topQuestion[0],
      count: data.answers.filter(answer => answer.questionid === modeId).length
    };
    yield put({
      type: types.TOP_QUESTION_SUCCESS,
      payload
    });
  } catch (error) {
    yield put({
      type: types.TOP_QUESTION_FAILURE
    });
  }
}

/**
 * Generator function to watch out
 * for requests for the top question
 * on the platform
 */
export function* watchTopQuestionRequest() {
  yield takeLatest(types.TOP_QUESTION_REQUEST, topQuestionWorker);
}
