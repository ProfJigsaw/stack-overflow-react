import React from 'react';
import { Link } from 'react-router-dom';

const HomeLayout = ({ children, match }) => {
  return (
    <div className="main-content">
      <div className="col col-1">
        <div className="wrapper">
          <ul className="stack-links">
            <li className="side-links"><Link to="/"><i className="fas fa-home" />Home</Link></li>
            <li className="side-links"><Link to="/questions"><i className="fas fa-book" />Questions</Link></li>
            <li className="side-links"><i className="fas fa-tags" />Tags</li>
            <li className="side-links"><i className="fas fa-users" />Users</li>
          </ul>
        </div>
      </div>

      <div className="col col-2">
        <div className="home">
          <i className="fas fa-home">
            <span className="question-url">Home{match.url}</span>
          </i>
        </div>
        <div className="banner" />
        {children}
      </div>
      <div className="col col-3">
        <button
          id="ask"
          className="form-button full-width"
        >
          Ask A Question
        </button>
        <hr />
        <div className="activity">
            Top Question
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
