import React from 'react';
import PropTypes from 'prop-types';
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

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
