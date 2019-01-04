import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CommentCard from './commentcard';
import { getUsername, getToken } from '../../utilities/auth';
import {
  downVote, upvoteAnswer, addComment, acceptAnswer
} from '../../actions/actions';
import {
  postComment,
  upVoteAnswer,
  downVoteAnswer,
  accAnswer
} from '../../utilities/questions';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.loadComments = this.loadComments.bind(this);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
    this.addComment = this.addComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.state = {
      displayComments: false,
      comment: '',
      error: ''
    };
  }

  upVote() {
    const { aid, qid, thumbsUp } = this.props;
    upVoteAnswer(qid, aid)
      .then(() => {
        thumbsUp(aid);
      })
      .catch(() => {
        this.setState({
          error: 'Could not upvote answer'
        });
        return setTimeout(() => {
          this.setState({
            error: ''
          });
        }, 3000);
      });
  }

  downVote() {
    const { aid, qid, thumbsDown } = this.props;
    downVoteAnswer(qid, aid)
      .then(() => {
        thumbsDown(aid);
      })
      .catch(() => {
        this.setState({
          error: 'Could not downvote answer'
        });
        return setTimeout(() => {
          this.setState({
            error: ''
          });
        }, 3000);
      });
  }

  loadComments() {
    const { displayComments } = this.state;
    this.setState({
      displayComments: !displayComments
    });
  }

  addComment(event) {
    const { updateComments, aid, qid } = this.props;
    const { comment } = this.state;
    if (event.key === 'Enter') {
      if (!getToken()) {
        this.setState({
          error: 'Sign in to enable comments'
        });
        return setTimeout(() => {
          this.setState({
            error: ''
          });
        }, 3000);
      }
      if (!comment.trim()) {
        this.setState({
          error: 'Enter some value before comment'
        });
        return setTimeout(() => {
          this.setState({
            error: ''
          });
        }, 3000);
      }
      const input = {
        answerid: aid,
        questionid: qid,
        username: getUsername(),
        comment,
        createdat: Date.now()
      };
      postComment(qid, aid, input)
        .then(() => {
          updateComments(input);
          this.setState({
            displayComments: true,
            comment: ''
          });
        })
        .catch(() => {
          this.setState({
            error: `
                There was an error adding your posting comment.
                Try signing in before adding a comment
                `
          });
          return setTimeout(() => {
            this.setState({
              error: ''
            });
          }, 3000);
        });
    }
  }

  handleChange(event) {
    this.setState({
      comment: event.target.value
    });
  }

  handleLike() {
    const { aid, qid, changeAnswerState } = this.props;
    accAnswer(qid, aid)
      .then((response) => {
        if (response.status === 202) {
          return changeAnswerState(aid);
        }
        this.setState({
          error: 'Only the author of the question can accept this answer'
        });
        return setTimeout(() => {
          this.setState({
            error: ''
          });
        }, 3000);
      })
      .catch(() => {
        return false;
      });
  }

  render() {
    const { displayComments, comment, error } = this.state;
    const { comments, aid, score } = this.props;
    return (
      <div className="answer-misc">
        <div className="misc-wrapper">

          <button
            data-testid="upvote-answer"
            className="misc-buttons upvote-button"
            onClick={this.upVote}
          >
            <i className="fa fa-arrow-up" />
          </button>

          <span>&nbsp;{score}&nbsp;&nbsp;&nbsp;&nbsp;</span>

          <button
            data-testid="downvote-answer"
            className="misc-buttons downvote-button"
            onClick={this.downVote}
          >
            <i className="fa fa-arrow-down" />
          </button>

          <button
            onClick={this.loadComments}
            data-testid="load-comment"
            className="misc-buttons load-comment-button"
          >
            <i className="fa fa-comment-o" />
            &nbsp; {displayComments ? 'Hide comments' : 'Load Comments' }
          </button>

          <button
            data-testid="like-answer"
            className="misc-buttons like-button"
            onClick={this.handleLike}
          >
            <i className="far fa-thumbs-up" />
          </button>

        </div>
        <div className="add-comment">
          <div className="form-group">
            <input
              onKeyDown={this.addComment}
              onChange={this.handleChange}
              data-testid="title-input"
              name="title"
              className="add-comment-input"
              type="text"
              placeholder="Add comment..."
              value={comment}
            />
          </div>
          {
            error
              && <p className="error-info">
                {error}
              </p>
          }
        </div>
        {displayComments && <div className="comments">
          <ul className="comments-list reply-list">
            {
              comments && comments
                .filter(aComment => aComment.answerid === aid)
                .map((ansComment, index) => {
                  return <CommentCard key={index} comment={ansComment} />;
                })
            }
          </ul>
        </div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.questionThread.comments
});

Comments.propTypes = {
  comments: PropTypes.array,
  aid: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  thumbsDown: PropTypes.func.isRequired,
  thumbsUp: PropTypes.func.isRequired,
  updateComments: PropTypes.func.isRequired,
  qid: PropTypes.number.isRequired,
  changeAnswerState: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {
  thumbsUp: upvoteAnswer,
  thumbsDown: downVote,
  updateComments: addComment,
  changeAnswerState: acceptAnswer
})(Comments);
