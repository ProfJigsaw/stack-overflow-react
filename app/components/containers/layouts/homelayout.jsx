import React from 'react';
import { Link } from 'react-router-dom';
import TopQuestion from '../topquestion';

const HomeLayout = ({ children, match }) => {
  return (
    <div className="main-content">
      <div className="col col-1">
        <div className="wrapper">
          <ul className="stack-links">
            <li className="side-links">
              <Link to="/"><i className="fas fa-home" />
                <span>  Home</span>
              </Link>
            </li>
            <li className="side-links">
              <Link to="/questions"><i className="fas fa-book" />
                <span>  Questions</span>
              </Link>
            </li>
            <li className="side-links">
              <i className="fas fa-tags" />
              <span>  Tags</span>
            </li>
            <li className="side-links">
              <i className="fas fa-users" />
              <span>  Users</span>
            </li>
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
        <Link to="/ask" >
          <button
            id="ask"
            className="form-button full-width"
          >
            Ask A Question
          </button>
        </Link>
        <hr />
        <div className="activity">
          <span className="top-decorator">Top Question</span>
          <TopQuestion />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
