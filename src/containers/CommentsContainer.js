import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../components/Comment';
import '../stylesheets/CommentsContainer.css';

const CommentsContainer = ({comments}) => {
  return (
    <div className="CommentsContainer">
      {comments.map((comment, idx) => <Comment key={idx} comment={comment} />)}
    </div>
  );
};

CommentsContainer.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentsContainer;
