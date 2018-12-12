import { all } from 'redux-saga/effects';
import {
  watchFetchQuestions,
  watchFetchSingleQuestion
} from './questions';

/**
 * The root saga
 */
function* rootSaga() {
  yield all([
    watchFetchQuestions(),
    watchFetchSingleQuestion()
  ]);
}

export default rootSaga;
