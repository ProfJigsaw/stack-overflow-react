import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import mockAxios from '../../../__mocks__/axios';
import rootSaga from '../../sagas';

import {
  GET_ALL_QUESTIONS,
  GET_ALL_QUESTIONS_SUCCESS,
  GET_SINGLE_QUESTION,
  GET_SINGLE_QUESTION_SUCCESS
} from '../../actions/actionTypes';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Get all question saga:', () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      questions: [],
      data: {
        questions: []
      }
    }
  }));
  it('should execute saga workers', async (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: GET_ALL_QUESTIONS },
      { type: GET_ALL_QUESTIONS_SUCCESS, questions: [] }
    ];

    store.dispatch({ type: GET_ALL_QUESTIONS });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});

describe('Get single question saga:', () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      data: []
    }
  }));
  it('should execute saga workers', async (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: GET_SINGLE_QUESTION },
      { type: GET_SINGLE_QUESTION_SUCCESS, payload: [] }
    ];

    store.dispatch({ type: GET_SINGLE_QUESTION });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});
