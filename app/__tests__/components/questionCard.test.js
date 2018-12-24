import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import QuestionCard from '../../components/questions/questioncard';
import { question } from '../testUtils/data';
import mockAxios from '../../../__mocks__/axios';

afterEach(cleanup);
jest.useFakeTimers();

describe('Question card:', () => {
  mockAxios.delete.mockImplementationOnce(() => Promise.resolve({
    data: {}
  }));

  localStorage.setItem('stack-userid', 1);

  it('should render without crashing', () => {
    const { getByTestId } = render(
      <Router>
        <QuestionCard question={question} />
      </Router>
    );

    const trash = getByTestId('trash');
    fireEvent.click(trash);
  });
});
