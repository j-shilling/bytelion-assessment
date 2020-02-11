import React from 'react';
import PropTypes from 'prop-types';
import {GoogleLogin, GoogleLogout} from 'react-google-login';

const GOOGLE_CLIENT_ID =
  '700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com';

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
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={() => setUser(null)}
        />
      );
    } else {
      return (
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
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

Login.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func.isRequired,
  addErrorMessage: PropTypes.func.isRequired,
};

export default Login;
