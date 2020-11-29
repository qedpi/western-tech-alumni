import React from 'react';
import { Route, Switch } from 'react-router';
import { App as TodoApp } from 'app/containers/App';
import { Login } from 'app/containers/Login';
import { hot } from 'react-hot-loader';
import { FirebaseContext } from 'app/FirebaseContext';
import firebase from 'firebase';

declare global {
  interface Window {
    firebase: firebase.app.App
  }
}

export const App = hot(module)(() => (
  <FirebaseContext.Provider value={{app: window.firebase}}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={TodoApp} />
    </Switch>
  </FirebaseContext.Provider>
));
