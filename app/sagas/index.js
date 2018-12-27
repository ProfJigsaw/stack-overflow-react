import { all } from 'redux-saga/effects';
import {
  watchFetchQuestions,
  watchFetchSingleQuestion
} from './questions';
import watchUserProfile from './profile';

/**
 * The root saga
 */
function* rootSaga() {
  yield all([
    watchFetchQuestions(),
    watchFetchSingleQuestion(),
    watchUserProfile()
  ]);
}

export default rootSaga;
