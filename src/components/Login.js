import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const responseGoogle = (res) => {
  console.log(res);
};


const Login = ({ user, setUser }) => {
  const handleLogin = (res) => {
    setUser(res.profileObj);
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
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      );
    }
  };


  return (
    <div>
      {loginOrLogoutButton()}
    </div>
  );
};

export default Login;
