import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import { props } from '../testUtils/data';
import Ask from '../../components/ask/ask';
import mockAxios from '../../../__mocks__/axios';

afterAll(cleanup);

describe('Add new question component', () => {
  it('should add a new question', () => {
    jest.useFakeTimers();
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: {},
      status: 201
    }));
    const { getByTestId } = render(<Ask {...props} />);

    const titleInput2 = getByTestId('title-input');
    const bodyInput2 = getByTestId('body-input');
    const tagsInput2 = getByTestId('tags-input');
    const submitButton2 = getByTestId('submit-button');

    fireEvent.click(submitButton2);
    fireEvent.change(titleInput2, { target: { value: 'dummy' } });
    fireEvent.change(bodyInput2, { target: { value: 'dummy' } });
    fireEvent.change(tagsInput2, { target: { value: 'dummy' } });
    fireEvent.click(submitButton2);

    jest.runAllTimers();
  });

  it('should add a new question', () => {
    jest.useFakeTimers();
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: {},
      status: 200
    }));
    const { getByTestId } = render(<Ask {...props} />);

    const submitButton2 = getByTestId('submit-button');
    fireEvent.click(submitButton2);

    jest.runAllTimers();
  });
});
