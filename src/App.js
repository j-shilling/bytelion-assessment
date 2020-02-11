import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Login user={user} setUser={setUser} />
      <h1>Hello, {user ? user.givenName : 'World'} </h1>
    </div>
  );
}

export default App;
