import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId = 'clientId'

function Login({currentUser}) {
    const onSuccess = (res) => {
      currentUser(res.profileObj)
      refreshTokenSetup(res);
    };
  
    const onFailure = (res) => {
      console.log('Login failed: res:', res);
    };
  
    return (
      <div>
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          style={{ marginTop: '100px' }}
          isSignedIn={true}
        />
      </div>
    );
  }
  
  export default Login;
