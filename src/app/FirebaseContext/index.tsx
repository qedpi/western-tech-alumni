import React from 'react'
import firebase from 'firebase'

export const FirebaseContext = React.createContext<{ app?: firebase.app.App }>({})