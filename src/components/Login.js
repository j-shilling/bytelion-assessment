import React from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';

const Login = ({user, setUser, addErrorMessage}) => {
  const handleLogin = (res) => {
    setUser(res.profileObj);
  };

  const handleFailure = (obj) => {
    addErrorMessage('An error occurred while logging in');
  };

  const loginOrLogoutButton = () => {
    if (user) {
      return (
        <GoogleLogout
          clientId="700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={() => setUser(null)}
        />
      );
    } else {
      return (
        <GoogleLogin
          clientId="700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={'single_host_origin'}
        />
      );
    }
  };

  return (
    <React.Fragment>
      {loginOrLogoutButton()}
    </React.Fragment>
  );
};

export default Login;
