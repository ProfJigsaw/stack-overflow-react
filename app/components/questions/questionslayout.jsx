import React, { Component } from 'react';
import { connect } from 'react-redux';
import Questions from './questions.jsx';
import MainLayout from '../containers/layouts/mainlayout.jsx';
import MainContent from '../containers/layouts/contentlayout.jsx';
import store from '../../store';
import { Instagram as Waiter } from 'react-content-loader';
import * as types from '../../actions/actionTypes';

class QuestionsLayout extends Component {
    componentDidMount () {
        store.dispatch({
            type: types.GET_ALL_QUESTIONS
        });
        window.scrollTo(0, 0)
    }
    render () {
        const { questions } = this.props;
        return (
            <div>
                <MainLayout nav={true}>
                    <MainContent {...this.props}>
                        {
                            questions ? 
                            <Questions questions={questions} /> :
                            <Waiter />
                        }
                    </MainContent>
                </MainLayout> 
            </div> 
        );
    }
}

const mapStateToProps = (store) => {
    return {
        questions: store.questions.questions
    }
}

export default connect(mapStateToProps)(QuestionsLayout);
