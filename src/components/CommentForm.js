import React, {useState} from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/CommentForm.css';

const CommentForm = ({addComment}) => {
  const [comment, setComment] = useState({name: '', body: ''});

  const handleChange = (e) => {
    setComment({...comment, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(comment);
    setComment({name: '', body: ''});
  };

  return (
    <div className="CommentForm">
      <form onSubmit={handleSubmit}>
        <input
          required
          type='text'
          name='name'
          placeholder='name'
          value={comment.name}
          onChange={handleChange}
        />
        <textarea
          required
          name='body'
          placeholder='Comment Body'
          value={comment.body}
          onChange={handleChange}
        />
        <input
          type='submit'
          value='Post'
        />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentForm;
