import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="search">
        <div className="search-wrapper">
          <input className="form-input" type="text" placeholder="Search ..." />
        </div>
        <span><i className="fa fa-search" /></span>
      </div>
    );
  }
}
