import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import QuestionsThreadLayout from '../questions/questionthreadlayout';
import Homepage from './homepage';

const QuestionPage = ({ match }) => {
  return (
    <div>
      <Route
        exact path={`${match.path}/:id`}
        component={QuestionsThreadLayout}
      />
      <Route exact path="/questions" component={Homepage} />
    </div>
  );
};

QuestionPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default QuestionPage;
