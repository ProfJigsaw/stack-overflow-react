import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import mockAxios from '../../../__mocks__/axios';
import rootSaga from '../../sagas';

import {
  USER_PROFILE_REQUEST,
  USER_QUESTIONS_SUCCESS,
  USER_PROFILE_FAILURE,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  TOP_QUESTION_REQUEST,
  TOP_QUESTION_SUCCESS,
  TOP_QUESTION_FAILURE
} from '../../actions/actionTypes';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

// USER PROFILE SAGA TEST
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

// SEARCH SAGA TEST
describe('Search saga:', () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      questions: [
        { question: 'dummy', title: 'dummy' }
      ],
      answers: []
    }
  }));
  it('should execute saga workers', async (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: SEARCH_REQUEST, payload: 'hello' },
      {
        type: SEARCH_SUCCESS,
        payload: []
      }
    ];

    store.dispatch({
      type: SEARCH_REQUEST,
      payload: 'hello'
    });

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
      { type: SEARCH_REQUEST },
      { type: SEARCH_FAILURE }
    ];

    store.dispatch({ type: SEARCH_REQUEST });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});

// TOP QUESTION SAGA TEST
describe('Top question saga:', () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      questions: [
        { questionid: 2, title: 'dummy' }
      ],
      answers: [
        { questionid: 2 },
        { questionid: 1 },
        { questionid: 2 }
      ]
    }
  }));
  it('should execute top question saga workers', async (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: TOP_QUESTION_REQUEST },
      {
        type: TOP_QUESTION_SUCCESS,
        payload: {
          question: { questionid: 2, title: 'dummy' },
          count: 2
        }
      }
    ];

    store.dispatch({ type: TOP_QUESTION_REQUEST });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});

describe('Top question:', () => {
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

  it('should mock failure saga workers', async (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: TOP_QUESTION_REQUEST },
      { type: TOP_QUESTION_FAILURE }
    ];

    store.dispatch({ type: TOP_QUESTION_REQUEST });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});
