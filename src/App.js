import React, { useState, useEffect } from 'react';

import logo from './resources/bytelion-logo.png';
import './App.css';

import Login from './components/Login';
import axios from 'axios';
import CommentsContainer from './containers/CommentsContainer';

function App() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log("running effect");
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res => setComments(res.data));
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
            addErrorMessage={msg => setMessages([...messages, msg])}
          />
        </div>
      </header>

      <ul>
        {messages.map(msg => <li>{msg}</li>)}
      </ul>

      <h1>Hello, {user ? user.givenName : 'World'} </h1>

      <CommentsContainer comments={comments} />
    </div>
  );
}

export default App;
