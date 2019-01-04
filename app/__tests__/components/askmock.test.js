import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import { props } from '../testUtils/data';
import Ask from '../../components/ask/ask';
import mockAxios from '../../../__mocks__/axios';

afterAll(cleanup);

describe('Add new question component', () => {
  it('should mock network error', () => {
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

    const { getByTestId } = render(<Ask {...props} />);

    const titleInput = getByTestId('title-input');
    const bodyInput = getByTestId('body-input');
    const tagsInput = getByTestId('tags-input');
    const submitButton = getByTestId('submit-button');

    fireEvent.change(titleInput, { target: { value: 'dummy' } });
    fireEvent.change(bodyInput, { target: { value: 'dummy' } });
    fireEvent.change(tagsInput, { target: { value: 'dummy' } });
    fireEvent.click(submitButton);
  });

  it('should run all timers', () => {
    jest.runAllTimers();
  });
});
