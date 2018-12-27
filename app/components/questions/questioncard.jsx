import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import avatar from '../../../public/assets/default.png';
import store from '../../store';
import * as types from '../../actions/actionTypes';
import { getUserId, getToken } from '../../utilities/auth';

class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthorized: true
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    const id = event.target.getAttribute('qid');
    const uid = event.target.getAttribute('uid');
    if (parseInt(uid, 0) !== parseInt(getUserId(), 0)) {
      this.setState({
        isAuthorized: false
      });
      return setTimeout(() => {
        this.setState({
          isAuthorized: true
        });
      }, 500);
    }
    store.dispatch({
      type: types.DELETE_QUESTION,
      payload: id
    });
    return axios
      .delete(`https://nvc-stackqa.herokuapp.com/api/v1/questions/${id}`,
        {
          headers: {
            authorization: `Bearer ${getToken()}`
          }
        });
  }

  render() {
    const { isAuthorized } = this.state;
    const { question } = this.props;
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
              <span
                data-testid="trash"
                className="delete" onClick={this.handleDelete}>
                <i
                  qid={`${question.questionid}`}
                  uid={`${question.userid}`}
                  className="fa fa-trash"
                />
                {
                  !isAuthorized
                  && (
                    <span> <i className="fa fa-warning"
                      style={{ color: 'red' }} /></span>
                  )
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

QuestionCard.propTypes = {
  question: PropTypes.object.isRequired
};

export default QuestionCard;
