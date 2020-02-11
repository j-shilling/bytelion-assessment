import React, { useState, useEffect } from 'react';
import axios from 'axios';

import logo from '../resources/bytelion-logo.png';
import '../stylesheets/App.css';

import Login from '../components/Login';

import CommentsContainer from './CommentsContainer';
import ColorCardContainer from './ColorCardContainer';

const App = () => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState(['test message']);
  const [comments, setComments] = useState([]);

  const removeMessage = msg => {
    setMessages(messages.filter(el => el !== msg));
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
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
        </ul>
        :
        null
      }

      <div id='banner'>
        <h1>Hi {user ? user.givenName : 'User'}! </h1>
        <p>Color really isn't that difficult to get right, if you know
          where to start.</p>
        <p>Learn by doing and you'll be a master in no time.</p>
      </div>

      <ColorCardContainer />

      <CommentsContainer comments={comments} />
    </div>
  );
};

export default App;
