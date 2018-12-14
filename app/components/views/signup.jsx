import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Signup from '../signup/signup';
import { isLoggedIn } from '../../utilities/auth';

const SignupLayout = () => {
  if (isLoggedIn()) {
    return (
      <Redirect to="/" />
    );
  }
  return (
    <div>
      <Route exact path="/signup" component={Signup} />
    </div>
  );
};

export default SignupLayout;
