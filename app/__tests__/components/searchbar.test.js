import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from 'react-testing-library';
import SearchBar from '../../components/searchbar/searchbar';
import store from '../testUtils/store';

afterEach(cleanup);

const searchStore = store(null);

describe('Search bar component', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(
      <Provider store={searchStore} >
        <SearchBar {...{ history: { push: jest.fn } }} />
      </Provider>
    );

    const searchInput = getByTestId('search-input');
    const searchBtn = getByTestId('search-button');
    const mockFxn = jest.fn();
    searchBtn.onclick = mockFxn;

    fireEvent.click(searchBtn);
    fireEvent.change(searchInput, { target: { value: 'Hello there' } });
    fireEvent.click(searchBtn);

    expect(mockFxn).toHaveBeenCalledTimes(2);
  });
});
