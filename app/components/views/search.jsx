import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { List as Waiter } from 'react-content-loader';
import MainLayout from '../containers/layouts/mainlayout';
import ContentLayout from '../containers/layouts/contentlayout';
import QuestionCard from '../questions/questioncard';
import { searchRequest } from '../../actions/actions';

class Search extends PureComponent {
  componentDidMount() {
    const { searchFor, location, keyword } = this.props;
    const locKeyword = location.search.split('=')[1];
    if (keyword === locKeyword) return;
    searchFor(locKeyword.trim());
  }

  componentDidUpdate() {
    const { searchFor, location, keyword } = this.props;
    const locKeyword = location.search.split('=')[1];
    if (keyword === locKeyword) return;
    searchFor(locKeyword.trim());
  }

  render() {
    const { searchResults, searching, location } = this.props;
    return (
      <MainLayout nav {...this.props}>
        <ContentLayout {...this.props}>
          <br />
          <div />
          <div className="home">
            <span className="question-url">
              {`Keyword: ${location.search.split('=')[1]}`}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {`Results found: ${searchResults.length}`}
            </span>
          </div>
          {searching && <Waiter/>}
          {!searching && searchResults.map((question, index) => {
            return (
              <QuestionCard question={question} key={index} />
            );
          })}
          {!searchResults.length
          && !searching
          && <div>No result found for the above keyword</div>}
        </ContentLayout>
      </MainLayout>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.search.searchResult,
  searching: state.search.searching,
  keyword: state.search.keyword
});

export default connect(mapStateToProps, {
  searchFor: searchRequest
})(Search);
