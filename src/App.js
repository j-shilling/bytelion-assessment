import React, { useState, useEffect } from 'react';

import logo from './resources/bytelion-logo.png';

import './App.css';

import Login from './components/Login';
import axios from 'axios';
import CommentsContainer from './containers/CommentsContainer';
import ColorCardContainer from './containers/ColorCardContainer';

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

      <div id='banner'>
        <h1>Hi {user ? user.givenName : 'User'}! </h1>
        <p>Color really isn't that difficult to get right, if you know where to start.</p>
        <p>Learn by doing and you'll be a master in no time.</p>
      </div>

      <ColorCardContainer />

      <ul>
        {messages.map(msg => <li>{msg}</li>)}
      </ul>



    </div>
  );
}

export default App;
