import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List as Waiter } from 'react-content-loader';
import PropTypes from 'prop-types';
import { topQuestionRequest } from '../../actions/actions';
import avatar from '../../../public/assets/default.png';

class TopQuestion extends Component {
  componentDidMount() {
    const { question, getTopQuestion } = this.props;
    if (question) return;
    getTopQuestion();
  }

  render() {
    const { question, loading, count } = this.props;
    if (!question || loading) {
      return (<Waiter />);
    }
    return (
      <div className="top-question">
        <div className="top-question-wrapper">
          <div className="side-col">
            <div className="image-container">
              <div style={{
                backgroundImage: `url(${avatar})`,
                backgroundSize: 'cover'
              }}
              className="image" />
            </div>
          </div>
          <div className="main-col">
            <div className="title-wrapper">
              <div className="question-title">
                <Link
                  to={`/questions/${question.questionid}`}
                  className="link"
                >
                  {question.title.slice(0, 35)}
                </Link>
              </div>
              <hr />
              <div className="top-question-body">
                {question.question.slice(0, 40)}...
              </div>
              <div className="question-misc">
                <i className="fa fa-chat" />
                    Answers: {count}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TopQuestion.propTypes = {
  question: PropTypes.object,
  count: PropTypes.number,
  getTopQuestion: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    question: state.topQuestion.question,
    count: state.topQuestion.answerCount,
    loading: state.topQuestion.loading
  };
};

export default connect(mapStateToProps, {
  getTopQuestion: topQuestionRequest
})(TopQuestion);
