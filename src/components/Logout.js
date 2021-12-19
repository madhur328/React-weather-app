import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
    '38287117924-54l679nd3g5am6u8l8aoqpkb8svmfu4r.apps.googleusercontent.com';

function Logout({currentUser}) {
  const onSuccess = () => {
    currentUser(null);
    console.log('Logout made successfully');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;