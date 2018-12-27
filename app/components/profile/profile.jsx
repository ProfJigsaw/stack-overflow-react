import React from 'react';
import PropTypes from 'prop-types';
import avatar from '../../../public/assets/default.png';
import { getUsername } from '../../utilities/auth';

const Profile = ({
  questions, answers, toggleQuestions, toggleAnswers
}) => {
  return (
    <div className="profile">
      <div className="profile-wrapper">
        <div className="profile-content">
          <div className="profile-bio">
            <div className="profile-image-container">
              <img
                className="profile-image"
                src={`${avatar}`}
                id="profile-pic" />
            </div>
            <div className="profile-info">
              <div className="profile-name">Username: {getUsername()}</div>
            </div>
            <div className="user-rank">
              <div className="user-questions">
                <div
                  data-testid="toggleQuestion"
                  onClick={toggleQuestions}
                  className="tooltip"
                >
                  <span className="tooltiptext">Click to view</span>
                  <div className="user-questions-label">Questions asked:</div>
                  <h2>{questions && questions.length}</h2>
                </div>
              </div>
              <div className="user-answers">
                <div
                  data-testid="toggleAnswer"
                  onClick={toggleAnswers}
                  className="tooltip"
                >
                  <span className="tooltiptext">Click to view</span>
                  <div className="user-answers-label">Answers given:</div>
                  <h2>{answers && answers.length}</h2>
                </div>
              </div>
              <div className="user-points">
                <div className="user-points-label">Points collected:</div>
                <h2>0</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  questions: PropTypes.array.isRequired,
  answers: PropTypes.array.isRequired,
  toggleAnswers: PropTypes.func.isRequired,
  toggleQuestions: PropTypes.func.isRequired
};

export default Profile;
