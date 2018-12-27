import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import mockAxios from '../../../__mocks__/axios';
import rootSaga from '../../sagas';

import {
  USER_PROFILE_REQUEST,
  USER_QUESTIONS_SUCCESS,
  USER_PROFILE_FAILURE
} from '../../actions/actionTypes';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Get all question saga:', () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      questions: [],
      answers: []
    }
  }));
  it('should execute saga workers', async (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: USER_PROFILE_REQUEST },
      {
        type: USER_QUESTIONS_SUCCESS,
        payload: {
          questions: [],
          answers: []
        }
      }
    ];

    store.dispatch({ type: USER_PROFILE_REQUEST });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});

describe('Get profile saga:', () => {
  const error = {
    data: {
      status: 500,
      message: 'Network Error',
      data: {
        message: 'Network Error',
      }
    }
  };

  mockAxios.get.mockImplementationOnce(() => Promise.reject(error));

  it('should execute saga workers', async (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: USER_PROFILE_REQUEST },
      { type: USER_PROFILE_FAILURE }
    ];

    store.dispatch({ type: USER_PROFILE_REQUEST });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});
