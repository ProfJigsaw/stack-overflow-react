import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import AddAnswer from '../../components/answer/answer';
import { props } from '../testUtils/data';
import mockAxios from '../../../__mocks__/axios';

afterAll(cleanup);

describe('Add answer component', () => {
  it('should mock an error response', () => {
    jest.useFakeTimers();
    const error = {
      data: {
        status: 500,
        message: 'Network Error',
        data: {
          message: 'Network Error',
        }
      }
    };

    mockAxios.post.mockImplementationOnce(() => Promise.reject(error));

    const { getByTestId } = render(
      <AddAnswer {...props} />
    );

    const answerInput = getByTestId('answer-input');
    const answerButton = getByTestId('answer-button');

    fireEvent.change(answerInput, { target: { value: 'hello' } });
    fireEvent.click(answerButton);

    jest.runAllTimers();
  });

  it('should implement all functionality without crashing', () => {
    jest.useFakeTimers();
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: {},
      status: 201
    }));
    const { getByTestId } = render(
      <AddAnswer {...props} />
    );

    const answerInput = getByTestId('answer-input');
    const answerButton = getByTestId('answer-button');

    fireEvent.change(answerInput, { target: { value: '' } });
    fireEvent.click(answerButton);
    fireEvent.change(answerInput, { target: { value: 'hello' } });

    fireEvent.click(answerButton);
    jest.runAllTimers();
  });

  it('should implement all functionality without crashing', () => {
    jest.useFakeTimers();
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: {},
      status: 200
    }));
    const { getByTestId } = render(
      <AddAnswer {...props} />
    );

    const answerInput = getByTestId('answer-input');
    const answerButton = getByTestId('answer-button');

    fireEvent.change(answerInput, { target: { value: '' } });
    fireEvent.click(answerButton);
    fireEvent.change(answerInput, { target: { value: 'hello' } });

    fireEvent.click(answerButton);
    jest.runAllTimers();
  });
});
