import React, { Component } from 'react';
import questionValidator from '../../utilities/validatequestion';
import { postQuestion } from '../../utilities/questions';

class Ask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      tags: '',
      isLoading: false,
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { errors, ...input } = this.state;
    const errorMsg = questionValidator(input);
    if (errorMsg) {
      this.setState({
        errors: {
          message: errorMsg
        }
      });
      return setTimeout(() => {
        this.setState({
          errors: {}
        });
      }, 3000);
    }
    postQuestion(input)
      .then((response) => {
        if (response.status === 201) {
          this.props.history.push('/questions');
        }
      })
      .catch((error) => {
        console.log('the error: ', error);
      });
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <form className="qform">
          <div className="form-group">
            <input
              name="title"
              className={`form-input ${errors.message && 'input-error'}`}
              type="text"
              placeholder="Enter question title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <textarea
              name="body"
              className={`form-input ${errors.message && 'input-error'}`}
              placeholder="Enter the question body ..."
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <input
              name="tags"
              className={`form-input ${errors.message && 'input-error'}`}
              type="text"
              placeholder="Tags"
              value={this.state.tags}
              onChange={this.handleChange}
            />
          </div>

          <button
            className="form-button"
            onClick={this.handleSubmit}
            disabled={this.state.isLoading}
          >
              Ask Question
            {
              this.state.isLoading && <i className="fa fa-spinner fa-spin" />
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

export default Ask;
