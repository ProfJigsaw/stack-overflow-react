import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../public/assets/default.png';

const QuestionCard = ({ question }) => {
  const date = new Date(question.createdat);
  return (
    <div>
      <div className="question-card">
        <div className="side-panel-info">
          <div className="profile-img">
            <img src={`${avatar}`} id="profile-pic" />
          </div>
        </div>
        <div className="question-frame">
          <div className="question-title">
            <p>
              {question.username} - Asked: {
                `${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`
              }
            </p>
            <Link
              to={`/questions/${question.questionid}`}
              className="link router-link"
            >
              {question.title}
            </Link>
          </div>
          <hr />
          <div className="question-body">
            {question.question}
          </div>
          <div className="question-misc">
            <button className="reply-button">Add answer<i className="fa fa-reply" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
