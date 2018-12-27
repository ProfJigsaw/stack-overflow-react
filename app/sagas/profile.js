import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionTypes';

const getUserProfile = () => axios
  .get('https://nvc-stackqa.herokuapp.com/api/v1/questions/stack/topquestion');

/**
 * Generator function to
 * dispatch profile actions
 */
function* userProfileWorker() {
  try {
    const { data } = yield call(getUserProfile);
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
export default function* watchUserProfile() {
  yield takeLatest(types.USER_PROFILE_REQUEST, userProfileWorker);
}
