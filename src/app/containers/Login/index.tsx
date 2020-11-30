import React, { useContext } from 'react'
import { FirebaseContext } from 'app/FirebaseContext'
import firebase from 'firebase/app'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

require('firebase/auth')

export const Login = () => {
  const firebaseContext = useContext(FirebaseContext)
  // todo: https://github.com/firebase/firebaseui-web-react#user-content-using-firebaseauth-with-local-state:~:text=Listen%20to%20the%20Firebase%20Auth%20state%20and%20set%20the%20local%20state.
  // const [user, setUser] = useState(null);
  //
  // useEffect(() => {
  //   setUser()
  //   unregisterAuthObserver = firebase.auth().onAuthStateChanged(
  //     (user) => this.setState({isSignedIn: !!user})
  //   );
  // });
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    }
  });
  if (firebaseContext.app) {
    const uiConfig = {
      // signInSuccessUrl: '/signedIn',
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
      },
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          signInMethod:
          firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
        }
      ]
      // Other config options...
    }
    return <div>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebaseContext.app.auth()}
      />
    </div>
  } else {
    return <div>Loading...</div>
  }
}
