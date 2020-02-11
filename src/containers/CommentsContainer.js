import React from 'react';
import Comment from '../components/Comment';
import '../stylesheets/CommentsContainer.css';

const CommentsContainer = ({ comments }) => {
  return (
    <div className="CommentsContainer">
      {comments.map((comment, idx) => <Comment key={idx} comment={comment} />)}
    </div>
  );
};

export default CommentsContainer;
