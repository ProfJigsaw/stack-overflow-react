import React from 'react';
import { render } from 'react-testing-library';
import Homepage from '../components/views/homepage';

describe('App', () => {
  it('should render without crashing', () => {
    render(<Homepage />);
  });
});