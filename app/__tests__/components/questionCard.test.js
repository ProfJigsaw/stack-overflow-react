import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import QuestionCard from '../../components/questions/questioncard';
import { question } from '../testUtils/data';
import mockAxios from '../../../__mocks__/axios';

afterEach(cleanup);

describe('Question card:', () => {
  mockAxios.delete.mockImplementationOnce(() => Promise.resolve({
    data: {}
  }));

  it('should render without crashing', () => {
    localStorage.setItem('stack-userid', 1);
    const { getByTestId } = render(
      <Router>
        <QuestionCard question={question} />
      </Router>
    );

    const trash = getByTestId('trash');
    fireEvent.click(trash);
    jest.setTimeout(2000);
  });

  it('should render without crashing', async (done) => {
    jest.useFakeTimers();
    localStorage.setItem('stack-userid', 10);
    const mockfxn = jest.fn();
    const { getByTestId } = render(
      <Router>
        <QuestionCard question={question} />
      </Router>
    );

    const trash = getByTestId('trash');
    trash.onclick = mockfxn;
    await fireEvent.click(trash);

    expect(mockfxn).toHaveBeenCalledTimes(1);
    jest.runAllTimers();
    done();
  });
});
