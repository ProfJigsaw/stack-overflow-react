import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List as Waiter } from 'react-content-loader';
import Questions from './questions';
import AddAnswer from '../answer/answer';
import Answers from './answers';
import {
  addNewAnswerToStore,
  getSingleQuestion
} from '../../actions/actions';
import MainLayout from '../containers/layouts/mainlayout';
import MainContent from '../containers/layouts/contentlayout';

class QuestionsLayout extends Component {
  componentDidMount() {
    const {
      getQuestion,
      match: {
        params: {
          id
        }
      }
    } = this.props;
    getQuestion(id);
    window.scrollTo(0, 0);
  }

  render() {
    const {
      question,
      answers
    } = this.props;
    return (
      <div>
        <MainLayout nav>
          <MainContent {...this.props}>
            {
              question
                ? <Questions questions={question} />
                : <Waiter />
            }
            <div className="answer__info">
                Answers:
              <span className="answer__count">
                {answers ? ` ${answers.length}` : '0'}
              </span>
            </div>
            {
              answers
                ? <Answers answers={answers} />
                : <div />
            }
            {question && <AddAnswer {...this.props} />}
          </MainContent>
        </MainLayout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    question: state.questionThread.question,
    answers: state.questionThread.answers
  };
};

export default connect(mapStateToProps, {
  addAnswerToStore: addNewAnswerToStore,
  getQuestion: getSingleQuestion
})(QuestionsLayout);
