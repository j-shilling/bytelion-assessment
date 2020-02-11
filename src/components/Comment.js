import React from 'react';

const Comment = ({ comment }) => {
  const { name, email, body } = comment;
  return (
    <div>
      <h3>{name}</h3>
      <p>{body}</p>
      <small>{email}</small>
    </div>
  );
};

export default Comment;
