import React, { useContext } from 'react'
import { FirebaseContext } from 'app/FirebaseContext'
import firebase from 'firebase/app'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
require('firebase/auth');

export const Login = () => {
  const firebaseContext = useContext(FirebaseContext);

  if (firebaseContext.app) {
    const uiConfig = {
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          signInMethod:
            firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
        },
      ],
      // Other config options...
    }
    return <div>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebaseContext.app.auth()}
      />
    </div>;
  } else {
    return <div>Loading...</div>
  }
}
