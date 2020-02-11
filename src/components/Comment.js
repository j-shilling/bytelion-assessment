import React from 'react';
import '../stylesheets/Comment.css';

const Comment = ({comment}) => {
  const {name, email, body} = comment;
  return (
    <div className="Comment">
      <span className="name">{name}</span>
      <p className="body">{body}</p>
      <a className="email" href={`mailto:${email}`}>- {email}</a>
    </div>
  );
};

export default Comment;
