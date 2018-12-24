import React from 'react';
import PropTypes from 'prop-types';
import QuestionCard from './questioncard';

const Question = ({ questions }) => {
  return (
    <div>
      {questions.map((question, i) => {
        return (
          <QuestionCard key={i} question={question} />
        );
      })}
    </div>
  );
};

Question.propTypes = {
  questions: PropTypes.array.isRequired
};

export default Question;
