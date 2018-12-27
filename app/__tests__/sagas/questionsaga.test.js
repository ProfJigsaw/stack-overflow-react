import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import mockAxios from '../../../__mocks__/axios';
import rootSaga from '../../sagas';

import {
  GET_ALL_QUESTIONS,
  GET_ALL_QUESTIONS_SUCCESS,
  GET_SINGLE_QUESTION,
  GET_SINGLE_QUESTION_SUCCESS,
  GET_ALL_QUESTIONS_FAILURE,
  GET_SINGLE_QUESTION_FAILURE
} from '../../actions/actionTypes';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);


describe('Get all question saga:', () => {
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
      { type: GET_ALL_QUESTIONS },
      { type: GET_ALL_QUESTIONS_FAILURE }
    ];

    store.dispatch({ type: GET_ALL_QUESTIONS });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});

describe('Get all question saga:', () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      questions: [
        {
          questionid: 6
        },
        {
          questionid: 7
        }
      ]
    }
  }));
  it('should execute saga workers', async (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: GET_ALL_QUESTIONS },
      {
        type: GET_ALL_QUESTIONS_SUCCESS,
        questions: [
          { questionid: 7 }, { questionid: 6 }
        ]
      }
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

describe('Get single question saga:', () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      data: {
        answers: {}
      }
    }
  }));
  it('should execute saga workers', async (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: GET_SINGLE_QUESTION },
      {
        type: GET_SINGLE_QUESTION_SUCCESS,
        payload: {
          answers: {}
        }
      }
    ];

    store.dispatch({ type: GET_SINGLE_QUESTION });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});

describe('Get all single question saga:', () => {
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
      { type: GET_SINGLE_QUESTION },
      { type: GET_SINGLE_QUESTION_FAILURE }
    ];

    store.dispatch({ type: GET_SINGLE_QUESTION });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});
