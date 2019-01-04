import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup, fireEvent } from 'react-testing-library';
import NavToggle from '../../components/navbar/navToggle';
import Navigation from '../../components/navbar/navbar';

afterAll(cleanup);

describe('Navigation toggle button test', () => {
  it('should be clickable', () => {
    const { getByTestId } = render(
      <div className="navbar-items"><NavToggle /></div>
    );

    const btn = getByTestId('button');
    fireEvent.click(btn);
  });
});

describe('Navigation component', () => {
  it('should render correctly', () => {
    localStorage.setItem('stack-username', 'honey');
    localStorage.setItem('stack-userid', 6);
    localStorage.setItem('stack-jwt', 'gdfsad');

    const { getByTestId } = render(
      <Router><Navigation /></Router>
    );

    const btn = getByTestId('logout-button');
    fireEvent.click(btn);
  });
});
