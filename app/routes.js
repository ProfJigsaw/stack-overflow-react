import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/views/homepage.jsx';
import QuestionRoutes from './components/views/questions.jsx';

export default () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/questions' component={QuestionRoutes} />
                <Route render={() => <h3>There is nothing on this end.</h3>} />
            </Switch>
        </Router>
    );
}