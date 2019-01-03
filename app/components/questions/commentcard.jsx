import React from 'react';
import PropTypes from 'prop-types';
import avatar from '../../../public/assets/default.png';

const CommentCard = ({ comment }) => {
  const date = new Date(comment.createdat);
  return (
    <li>
      <div className="comment-avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="comment-box">
        <div className="comment-head">
          <h6 className="comment-name" />
          <span> {comment.username} replied: {date.toLocaleDateString()} </span>
          <i className="fa fa-reply" />
          <i className="fa fa-heart" />
        </div>
        <div className="comment-content">
          {comment.comment}
        </div>
      </div>
    </li>
  );
};

CommentCard.propTypes = {
  comment: PropTypes.object.isRequired
};

export default CommentCard;
