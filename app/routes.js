import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/views/homepage.jsx';

export default () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route render={() => <h3>There is nothing on this end.</h3>} />
            </Switch>
        </Router>
    );
}