import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import avatar from '../../../public/assets/default.png';

const AnswerCard = ({ answer }) => {
  const date = new Date(answer.createdat);
  return (
    <div>
      <div className="answer-card">
        <div className="side-panel-info">
          <div className="profile-img">
            <img src={`${avatar}`} id="profile-pic" />
          </div>
        </div>
        <div className="answer-frame">
          <div className="question-title">
            <p>
              {answer.username} - Answered: {
                `${date.toLocaleDateString()}`
              }
            </p>
            {
              answer.state
                ? (
                  <span>
                    <i
                      className="fa fa-check fa-2x"
                      style={{ color: 'green' }}
                    />
                  </span>
                )
                : (<div />)
            }
          </div>
          <hr />
          <div className="answer-body">
            {answer.answer}
          </div>
          <div className="answer-misc">
            <Link to={`/questions/${answer.questionid}`}>
              <button className="reply-button">
              View this question
                <i className="fa fa-arrow-right" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

AnswerCard.propTypes = {
  answer: PropTypes.object.isRequired
};

export default AnswerCard;
