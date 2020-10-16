import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LogBox, YellowBox } from 'react-native';
import { NavigationActions } from 'react-navigation';
import RouterNavs from './app/constants/Routes';
import { navigate } from './app/navigation/AppNavigation';
import _loadFonts from './app/resources/fonts/LoadFonts';
import Loading from './app/screens/Loading';
import Login from './app/screens/Login';
import OptionLogin from './app/screens/OptionLogin';

const Stack = createStackNavigator();
LogBox.ignoreLogs(['Setting a timer for a long period of time, i.e. multiple minutes'])
export default function App() {
  const [showLoading, setShowLoading] = React.useState(true);

  React.useEffect(() => {
    const loadFonts = async () => {
      const resp = await _loadFonts();
      setShowLoading(!resp);
    };
    loadFonts();
  }, []);

  if (showLoading) {
    return <Loading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen
            name={RouterNavs.OPTIONAL_LOGIN}
            component={OptionLogin}
          />
          <Stack.Screen name={RouterNavs.LOGIN} component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
