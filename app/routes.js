import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/views/homepage';
import QuestionRoutes from './components/views/questions';
import Ask from './components/views/newquestion';
import Signup from './components/views/signup';
import Signin from './components/views/signin';
import Profile from './components/views/profilepage';
import Search from './components/views/search';
import NotFoundPage from './components/views/notfound';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/questions" component={QuestionRoutes} />
        <Route path="/ask" component={Ask} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Signin} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/search" component={Search} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
