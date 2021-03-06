import React, {useState, useEffect} from 'react';
import axios from 'axios';

import logo from '../resources/bytelion-logo.png';
import '../stylesheets/App.css';

import Login from '../components/Login';
import CommentForm from '../components/CommentForm';

import CommentsContainer from './CommentsContainer';
import ColorCardContainer from './ColorCardContainer';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/comments';

const App = () => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [comments, setComments] = useState([]);

  const removeMessage = (msg) => {
    setMessages(messages.filter((el) => el !== msg));
  };

  const addComment = (comment) => {
    if (!comment.name || !comment.body) {
      setMessages([...messages, 'Can\'t comment without a name and body']);
    } else {
      const commentWithEmail = {...comment, email: user.email};
      setComments([commentWithEmail, ...comments]);
      axios.post(API_ENDPOINT, commentWithEmail)
          .catch((error) => {
            console.log(error);
            setMessages([...messages, 'New comment did not save!']);
          });
    }
  };

  useEffect(() => {
    axios.get(API_ENDPOINT)
        .then((res) => setComments(res.data));
  }, []);

  return (
    <div className="App">
      <header id='header'>
        <div id='logo-container'>
          <img id='logo' src={logo} alt="logo" />
        </div>
        <div id='login-container'>
          <Login
            user={user}
            setUser={setUser}
            addErrorMessage={(msg) => setMessages([...messages, msg])}
          />
        </div>
      </header>

      {messages.length ?
                <ul>
                  {messages.map((msg, idx) => {
                    return (
                      <li onClick={() => removeMessage(msg)} key={idx}>{msg}</li>
                    );
                  })}
                </ul> :
                null
      }

      <div id='banner'>
        <h1>Hi {user ? user.givenName : 'User'}! </h1>
        <p>Color really isn't that difficult to get right, if you know
          where to start.</p>
        <p>Learn by doing and you'll be a master in no time.</p>
      </div>

      <ColorCardContainer />

      {user ?
                <CommentForm addComment={addComment} /> :
                null
      }
      <CommentsContainer comments={comments} />
    </div>
  );
};

export default App;
