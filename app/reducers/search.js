import * as types from '../actions/actionTypes';

const initalStates = {
  searchResult: [],
  keyword: '',
  searching: false,
  error: false
};

const searchReducer = (state = initalStates, action) => {
  switch (action.type) {
  case types.SEARCH_REQUEST:
    state = {
      ...state,
      keyword: action.payload,
      searchResult: [],
      error: false,
      searching: true
    };
    break;
  case types.SEARCH_SUCCESS:
    state = {
      ...state,
      error: false,
      searchResult: action.payload,
      searching: false
    };
    break;
  case types.SEARCH_FAILURE:
    state = {
      ...state,
      error: true,
      searchResult: [],
      searching: false
    };
    break;
  default:
    return state;
  }
  return state;
};

export default searchReducer;
