import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchRequest } from '../../actions/actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      keyword: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { keyword } = this.state;
    const { searchFor, history } = this.props;
    if (!keyword.trim()) return;
    searchFor(keyword.trim());
    history.push(`/search?q=${keyword.trim()}`);
  }

  render() {
    const { keyword } = this.state;
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <div className="search-wrapper">
            <input
              data-testid="search-input"
              onChange={this.handleChange}
              className="form-input"
              type="text"
              placeholder="Search ..."
              value={keyword}
            />
          </div>
          <span className="search-button">
            <i
              data-testid="search-button"
              onClick={this.handleSubmit} className="fa fa-search" />
          </span>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchFor: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(null, { searchFor: searchRequest })(SearchBar);
