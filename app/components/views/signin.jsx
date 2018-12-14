import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Signin from '../signin/signin';
import { isLoggedIn } from '../../utilities/auth';

const SigninLayout = () => {
  if (isLoggedIn()) {
    return (
      <Redirect to="/" />
    );
  }
  return (
    <div>
      <Route exact path="/login" component={Signin} />
    </div>
  );
};

export default SigninLayout;
