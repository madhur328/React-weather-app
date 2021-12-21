import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
    'clientId';

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
