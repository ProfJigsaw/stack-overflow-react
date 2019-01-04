import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from 'react-testing-library';
import CommentCard from '../../components/questions/commentcard';
import Comments from '../../components/questions/comments';
import { props, comments, finalThread } from '../testUtils/data';
import store from '../testUtils/store';
import mockAxios from '../../../__mocks__/axios';

afterAll(cleanup);

afterEach(() => {
  jest.runAllTimers();
});

beforeEach(() => {
  jest.useFakeTimers();
});

const initialStore = store(finalThread);

describe('Comment card component: ', () => {
  it('should render without crashing', () => {
    render(<CommentCard comment={comments[0]} />);
  });
});

describe('Comments component:', () => {
  it('should implement all commenting functionality', () => {
    localStorage.removeItem('stack-jwt');
    const { getByTestId } = render(
      <Provider store={initialStore}>
        <Comments {...props} />
      </Provider>
    );
    const upvoteBtn = getByTestId('upvote-answer');
    const downvoteBtn = getByTestId('downvote-answer');
    const loadBtn = getByTestId('load-comment');
    const likeBtn = getByTestId('like-answer');
    const input = getByTestId('title-input');
    fireEvent.keyDown(input, { key: 'Space', code: 32 });
    fireEvent.keyDown(input, { key: 'Enter', code: 13 });

    localStorage.setItem('stack-jwt', 'dummy');
    fireEvent.keyDown(input, { key: 'Enter', code: 13 });

    fireEvent.change(input, { target: { value: 'hello' } });

    fireEvent.click(upvoteBtn);
    fireEvent.click(downvoteBtn);
    fireEvent.click(loadBtn);
    fireEvent.click(likeBtn);
    fireEvent.keyDown(input, { key: 'Enter', code: 13 });
  });

  it('should implement like functionality', () => {
    mockAxios.put.mockImplementationOnce(() => Promise.resolve({
      status: 201
    }));
    localStorage.removeItem('stack-jwt');
    const { getByTestId } = render(
      <Provider store={initialStore}>
        <Comments {...props} />
      </Provider>
    );

    const likeBtn = getByTestId('like-answer');

    fireEvent.click(likeBtn);
  });
});

describe('Comments component:', () => {
  it('mock error functionality', () => {
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
    mockAxios.put.mockImplementation(() => Promise.reject(error));

    localStorage.removeItem('stack-jwt');
    const { getByTestId } = render(
      <Provider store={initialStore}>
        <Comments {...props} />
      </Provider>
    );
    const upvoteBtn = getByTestId('upvote-answer');
    const downvoteBtn = getByTestId('downvote-answer');
    const loadBtn = getByTestId('load-comment');
    const likeBtn = getByTestId('like-answer');
    const input = getByTestId('title-input');
    fireEvent.keyDown(input, { key: 'Space', code: 32 });
    fireEvent.keyDown(input, { key: 'Enter', code: 13 });

    localStorage.setItem('stack-jwt', 'dummy');
    fireEvent.keyDown(input, { key: 'Enter', code: 13 });

    fireEvent.change(input, { target: { value: 'hello' } });

    fireEvent.click(upvoteBtn);
    fireEvent.click(downvoteBtn);
    fireEvent.click(loadBtn);
    fireEvent.click(likeBtn);
    fireEvent.keyDown(input, { key: 'Enter', code: 13 });
    jest.runAllTimers();
  });
});
