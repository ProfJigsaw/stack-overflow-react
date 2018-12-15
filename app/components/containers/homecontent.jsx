import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List as Waiter } from 'react-content-loader';
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
    console.log(questions);
    return (
      <div>
        <MainLayout nav>
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

export default connect(mapStateToProps)(QuestionsLayout);
