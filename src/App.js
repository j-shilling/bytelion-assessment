import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);

  return (
    <div className="App">
      <Login
        user={user}
        setUser={setUser}
        addErrorMessage={msg => setMessages([...messages, msg])}
      />

      <ul>
        {messages.map(msg => <li>{msg}</li>)}
      </ul>

      <h1>Hello, {user ? user.givenName : 'World'} </h1>
    </div>
  );
}

export default App;
