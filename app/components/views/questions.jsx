import React from 'react';
import { Route } from 'react-router-dom';
import QuestionsThreadLayout from '../../components/questions/questionthreadlayout.jsx';
import Homepage from './homepage.jsx';

export default ({ match }) => {
    return (
        <div>
            <Route exact path={`${match.path}/:id`} component={QuestionsThreadLayout} />
            <Route exact path='/questions' component={Homepage} /> 
        </div> 
    );
}
