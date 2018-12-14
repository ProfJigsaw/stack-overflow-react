import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Instagram as Waiter } from 'react-content-loader';
import Questions from '../questions/questions';
import MainLayout from './layouts/mainlayout';
import HomeContent from './layouts/homelayout';
import store from '../../store';
import * as types from '../../actions/actionTypes';

class QuestionsLayout extends Component {
  componentDidMount() {
    store.dispatch({
      type: types.GET_ALL_QUESTIONS
    });
    window.scrollTo(0, 0);
  }

  render() {
    const { questions } = this.props;
    return (
      <div>
        <MainLayout nav>
          <HomeContent {...this.props}>
            {
              questions
                ? <Questions questions={questions} />
                : <Waiter />
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

export default connect(mapStateToProps)(QuestionsLayout);
