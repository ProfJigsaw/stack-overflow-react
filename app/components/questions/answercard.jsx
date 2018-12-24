import React from 'react';
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
          <div className="answer-misc" />
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;
