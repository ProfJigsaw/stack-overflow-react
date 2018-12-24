import React from 'react';
import { render } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import Question from '../components/questions/questions';
import { questions } from './testUtils/data';
import {
  getToken, getUserId, getUsername, isLoggedIn
} from '../utilities/auth';

describe('App', () => {
  it('should render without crashing', () => {
    render(
      <Router>
        <Question questions={questions} />
      </Router>
    );
  });

  it('should return stored credentials', () => {
    expect(isLoggedIn()).toBe(false);
    localStorage.setItem('stack-userid', 1);
    localStorage.setItem('stack-username', 'jigsaw');
    localStorage.setItem('stack-jwt', 'jiggy-rocks');

    expect(getToken()).toBe('jiggy-rocks');
    expect(getUsername()).toBe('jigsaw');
    expect(parseInt(getUserId(), 10)).toBe(1);
    expect(isLoggedIn()).toBe(true);
  });
});
