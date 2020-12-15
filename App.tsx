import * as firebase from 'firebase';
import 'firebase/firestore';
import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigation from './app/components/AppNavigation';
import { firebaseConfig } from './app/firebase/FirebaseConfig';
import generateStore from './app/redux/Store';

LogBox.ignoreLogs([
  'Setting a timer for a long period of time, i.e. multiple minutes',
]);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
