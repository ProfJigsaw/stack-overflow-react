import React from 'react';
import { render } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom'
import Question from '../components/questions/questions';

const questions = [
  {
    title: 'dummy title'
  },
  {
    title: 'second title'
  }
];

describe('App', () => {
  it('should render without crashing', () => {
    render(
      <Router>
        <Question questions={questions} />
      </Router>
    );
  });
});