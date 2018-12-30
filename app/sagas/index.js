import { all } from 'redux-saga/effects';
import {
  watchFetchQuestions,
  watchFetchSingleQuestion
} from './questions';
import {
  watchUserProfile,
  watchSearchRequest,
  watchTopQuestionRequest
} from './profile';

/**
 * The root saga
 */
function* rootSaga() {
  yield all([
    watchFetchQuestions(),
    watchFetchSingleQuestion(),
    watchUserProfile(),
    watchSearchRequest(),
    watchTopQuestionRequest()
  ]);
}

export default rootSaga;
