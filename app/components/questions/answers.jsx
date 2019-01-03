import React from 'react';
import PropTypes from 'prop-types';
import CommentPanel from './comments';
import AnswerCard from './answercard';

const Answers = ({ answers }) => {
  return (
    <div>
      {answers.map((answer, i) => {
        return (
          <div key={i}>
            <AnswerCard key={i} answer={answer} />
            <CommentPanel
              score={answer.upvotes - answer.downvotes}
              aid={answer.answerid}
              qid={answer.questionid}
              key={answers.length + i} />
          </div>
        );
      })}
    </div>
  );
};

Answers.propTypes = {
  answers: PropTypes.array.isRequired
};

export default Answers;
