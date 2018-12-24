import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List as Waiter } from 'react-content-loader';
import { getAllQuestions } from '../../actions/actions';
import Questions from './questions';
import MainLayout from '../containers/layouts/mainlayout';
import MainContent from '../containers/layouts/contentlayout';

class QuestionsLayout extends Component {
  componentDidMount() {
    const { getQuestions } = this.props;
    getQuestions();
    window.scrollTo(0, 0);
  }

  render() {
    const { questions } = this.props;
    return (
      <div>
        <MainLayout nav>
          <MainContent {...this.props}>
            {
              questions
                ? <Questions questions={questions} />
                : <Waiter />
            }
          </MainContent>
        </MainLayout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions.questions
  };
};

export default connect(mapStateToProps, {
  getQuestions: getAllQuestions
})(QuestionsLayout);
