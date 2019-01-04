import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addAnswer } from '../../utilities/questions';
import { getUserId, getUsername } from '../../utilities/auth';

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      isPosting: false,
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { errors, ...input } = this.state;
    const {
      addAnswerToStore,
      match: {
        params: {
          id
        }
      }
    } = this.props;
    if (input.answer.trim() === '') {
      this.setState({
        errors: {
          message: 'Enter an answer before submitting',
          isPosting: false
        }
      });
      return setTimeout(() => {
        this.setState({
          errors: {},
          isPosting: false
        });
      }, 3000);
    }
    this.setState({
      errors: {},
      isPosting: true
    });
    addAnswer(parseInt(id, 10), input)
      .then((response) => {
        if (response.status === 201) {
          this.setState({
            answer: '',
            errors: {},
            isPosting: false
          });
          addAnswerToStore({
            questionid: id,
            username: getUsername(),
            userid: getUserId(),
            answer: input.answer,
            state: false,
            upvotes: 0,
            downvotes: 0,
            createdat: Date.now()
          });
        }
      })
      .catch((error) => {
        this.setState({
          errors: {
            message: 'Could not post answer',
            error
          },
          isPosting: false
        });
        setTimeout(() => {
          this.setState({
            errors: {},
          });
        }, 3000);
      });
  }

  render() {
    const { errors, answer, isPosting } = this.state;
    return (
      <div>
        <form className="qform">
          <div className="form-group">
            <textarea
              data-testid="answer-input"
              name="answer"
              className={`form-input ${errors.message && 'input-error'}`}
              placeholder="Add your answer ..."
              value={answer}
              onChange={this.handleChange}
            />
          </div>

          <button
            data-testid="answer-button"
            className="form-button"
            onClick={this.handleSubmit}
            disabled={isPosting}
          >
            {
              isPosting
                ? (<span>Posting<i className="fa fa-spinner fa-spin" /></span>)
                : (<span>Add answer</span>)
            }
          </button>
          {
            errors.message
              && <p className="error-info">
                {errors.message}
              </p>
          }
        </form>
      </div>
    );
  }
}

Answer.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  addAnswerToStore: PropTypes.func.isRequired
};

export default Answer;
