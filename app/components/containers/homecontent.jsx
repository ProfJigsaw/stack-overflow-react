import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List as Waiter } from 'react-content-loader';
import Questions from '../questions/questions';
import MainLayout from './layouts/mainlayout';
import HomeContent from './layouts/homelayout';
import { getAllQuestions } from '../../actions/actions';

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
        <MainLayout nav {...this.props}>
          <HomeContent {...this.props}>
            {
              questions.length
                ? <Questions questions={questions} />
                : <div><p /><Waiter /><Waiter /></div>
            }
          </HomeContent>
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
