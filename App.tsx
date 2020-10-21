import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LogBox } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import AppNavigation from './app/components/AppNavigation';
import RouterNavs from './app/constants/Routes';
import generateStore from './app/redux/Store';
import _loadFonts from './app/resources/fonts/LoadFonts';
import Home from './app/screens/Home';
import Loading from './app/screens/Loading';
import Login from './app/screens/Login';
import OptionLogin from './app/screens/OptionLogin';
import Register from './app/screens/Register';

LogBox.ignoreLogs([
  'Setting a timer for a long period of time, i.e. multiple minutes',
]);
export default function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
