import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId = '38287117924-54l679nd3g5am6u8l8aoqpkb8svmfu4r.apps.googleusercontent.com'

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