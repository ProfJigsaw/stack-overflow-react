import React from 'react';

const HomeLayout = ({ children, match }) => {
  return (
    <div className="main-content">
      <div className="col col-1">
        <div className="wrapper">
          <ul className="stack-links">
            <li className="side-links"><i className="fas fa-home" />Home</li>
            <li className="side-links"><i className="fas fa-book" />Questions</li>
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
        <input
          id="ask"
          className="form-input"
          type="submit"
          placeholder="ASK"
          value="Ask A Question"/>
        <hr />
        <div className="activity">
            Top Question
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
