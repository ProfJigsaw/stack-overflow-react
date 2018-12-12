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
      error: ['Error finding questions']
    });
  }
}

/**
 * Saga to watch request for single questions
 */
export function* watchFetchSingleQuestion(type, payload) {
  yield takeEvery('GET_SINGLE_QUESTION', fetchSingleQuestionAsync);
}

function* fetchSingleQuestionAsync(action) {

  console.log('This is the action id: ', action.id);
  try {
      const response = yield call(() => {
        return fetch(`https://nvc-stackqa.herokuapp.com/api/v1/questions/${action.id}`)
        .then(res => res.json())
      }
    );
    console.log(response.data);
    if (response.data.answers) {
      yield put({
        type: 'GET_SINGLE_QUESTION_SUCCESS',
        questions: response.data.question
      });
      yield put({
        type: 'GET_QUESTION_ANSWERS',
        answers: response.data.answers
      });
    } else {
      yield put({
        type: 'GET_SINGLE_QUESTION_SUCCESS',
        questions: response.data.reverse()
      });
    }
  } catch (error) {
    yield put({
      type: 'GET_SINGLE_QUESTION_FAILURE',
      questions: ['Error finding questions']
    });
  }
}