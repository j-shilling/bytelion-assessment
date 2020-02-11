import React from 'react';
import Comment from '../components/Comment';

const CommentsContainer = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, idx) => <Comment key={idx} comment={comment} />)}
    </div>
  );
};

export default CommentsContainer;
