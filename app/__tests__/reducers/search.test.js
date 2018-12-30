import searchReducer from '../../reducers/search';
import * as types from '../../actions/actionTypes';

const initialState = {
  searchResult: [],
  keyword: '',
  searching: false,
  error: false
};

describe('Single article reducer: ', () => {
  it('should have the correct default state', () => {
    expect(searchReducer(undefined, {
      type: 'non-existent type'
    })).toEqual(initialState);
  });

  it('should update the reducer state', () => {
    expect(searchReducer(undefined, {
      type: types.SEARCH_REQUEST,
      payload: 'BLAM'
    })).toEqual({
      ...initialState,
      keyword: 'BLAM',
      searchResult: [],
      error: false,
      searching: true
    });
  });

  it('should update the reducer state with an error message', () => {
    expect(searchReducer(undefined, {
      type: types.SEARCH_SUCCESS,
      payload: 'success'
    })).toEqual({
      ...initialState,
      error: false,
      searchResult: 'success',
      searching: false
    });
  });

  it('should update the reducer state with an error message', () => {
    expect(searchReducer(undefined, {
      type: types.SEARCH_FAILURE,
    })).toEqual({
      ...initialState,
      error: true,
      searchResult: [],
      searching: false
    });
  });
});
