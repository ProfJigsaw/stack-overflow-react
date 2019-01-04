import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';
import Answers from '../../components/questions/answers';
import store from '../testUtils/store';
import { answers, threadQuestions } from '../testUtils/data';

const iStore = store(threadQuestions);

describe('Answers container:', () => {
  it('should render answers container without failing', () => {
    render(
      <Provider store={iStore}>
        <Answers answers={answers} />
      </Provider>
    );
  });
});
