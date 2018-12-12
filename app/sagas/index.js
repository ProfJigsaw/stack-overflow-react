import { all } from 'redux-saga/effects';
import { watchFetchQuestions } from './questions';

/**
 * The root saga
 */
function* rootSaga() {
  yield all([
    watchFetchQuestions(),
  ]);
}

export default rootSaga;
