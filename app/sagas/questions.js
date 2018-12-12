import { takeEvery, put, call } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';

export function* watchFetchQuestions() {
    yield takeEvery(types.GET_ALL_QUESTIONS, fetchQuestionsAsync);
  }
  
function* fetchQuestionsAsync() {
  try {
      const response = yield call(() => {
        return fetch('https://nvc-stackqa.herokuapp.com/api/v1/questions')
        .then(response => response.json())
      }
    );
    yield put({
        type: types.GET_ALL_QUESTIONS_SUCCESS,
        questions: response.questions.reverse()
    });
  } catch (error) {
    yield put({
      type: types.GET_ALL_QUESTIONS_FAILURE,
    });
  }
}

/**
 * Saga to watch request for single questions
 */
export function* watchFetchSingleQuestion(type, action) {
  yield takeEvery(types.GET_SINGLE_QUESTION, fetchSingleQuestionAsync);
}

function* fetchSingleQuestionAsync(action) {
  try {
      const response = yield call(() => {
        return fetch(`https://nvc-stackqa.herokuapp.com/api/v1/questions/${action.id}`)
        .then(res => res.json())
      }
    );
    if (response.data.answers) {
      console.log(response.data);
      yield put({
        type: types.GET_SINGLE_QUESTION_SUCCESS,
        payload: response.data
      });
    } else {
      yield put({
        type: types.GET_SINGLE_QUESTION_SUCCESS,
        payload: response.data.reverse()
      });
    }
  } catch (error) {
    yield put({
      type: types.GET_SINGLE_QUESTION_FAILURE,
    });
  }
}