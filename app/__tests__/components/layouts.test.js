import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import QuestionLayout from '../../components/questions/questionslayout';
import QuestionThreadLayout
  from '../../components/questions/questionthreadlayout';
import TopQuestion from '../../components/containers/topquestion';
import store from '../testUtils/store';
import {
  threadQuestions,
  props,
  finalThread,
  finalThread2
} from '../testUtils/data';

afterEach(cleanup);

const initialStore = store(threadQuestions);
const finalStore = store(finalThread);
const remAnsFinal = store(finalThread2);

describe('Question Layout:', () => {
  it('should render without crashing', () => {
    render(
      <Provider store={initialStore}><Router>
        <QuestionLayout {...props}/>
      </Router>
      </Provider>
    );
    render(
      <Provider store={finalStore}><Router>
        <QuestionLayout {...props}/>
      </Router>
      </Provider>
    );
  });
});

describe('Question Thread Layout:', () => {
  it('should render without crashing', () => {
    render(
      <Provider store={initialStore}><Router>
        <QuestionThreadLayout {...props}/>
      </Router></Provider>
    );
    render(
      <Provider store={finalStore}><Router>
        <QuestionThreadLayout count={1} {...props}/>
      </Router></Provider>
    );
    render(
      <Provider store={initialStore}><Router>
        <TopQuestion count={1} {...props}/>
      </Router></Provider>
    );
    render(
      <Provider store={remAnsFinal}><Router>
        <TopQuestion count={1} {...props}/>
      </Router></Provider>
    );
  });
});
