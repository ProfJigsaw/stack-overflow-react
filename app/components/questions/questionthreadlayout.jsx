import React, { Component } from 'react';
import { connect } from 'react-redux';
import Questions from './questions.jsx';
import Answers from './answers.jsx';
import MainLayout from '../containers/layouts/mainlayout.jsx';
import MainContent from '../containers/layouts/contentlayout.jsx';
import store from '../../store';
import { List as Waiter } from 'react-content-loader';
import * as types from '../../actions/actionTypes';

class QuestionsLayout extends Component {
    componentDidMount () {
        let { params } = this.props.match;
        store.dispatch({
            type: types.GET_SINGLE_QUESTION,
            id: params.id
        });
        window.scrollTo(0, 0)
    }
    render () {
        const { question, answers } = this.props;
        return (
            <div>
                <MainLayout nav={true}>
                    <MainContent {...this.props}>
                        {
                            question ? 
                            <Questions questions={question} /> :
                            <Waiter />
                        }
                        <div className="answer__info">
                            Answers: <span className="answer__count">{answers ? answers.length : '0'}</span>
                        </div>
                        {
                            answers ?
                            <Answers answers={answers} /> :
                            <div />
                        }
                    </MainContent>
                </MainLayout> 
            </div> 
        );
    }
}

const mapStateToProps = (store) => {
    return {
        question: store.questionThread.question,
        answers: store.questionThread.answers
    }
}

export default connect(mapStateToProps)(QuestionsLayout);
