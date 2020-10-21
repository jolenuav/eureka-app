import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { connect, useSelector } from 'react-redux';
import RouterNavs from '../constants/Routes';
import _loadFonts from '../resources/fonts/LoadFonts';
import Home from '../screens/Home';
import Loading from '../screens/Loading';
import Login from '../screens/Login';
import OptionLogin from '../screens/OptionLogin';
import Register from '../screens/Register';

const Stack = createStackNavigator();
export default function AppNavigation() {
  const [showLoading, setShowLoading] = React.useState(true);
  const token = useSelector((state: any) => state.authentication.token);

  React.useEffect(() => {
    const loadFonts = async () => {
      const resp = await _loadFonts();
      setShowLoading(!resp);
    };
    loadFonts();
  }, []);

  if (showLoading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        {!token || token === '' ? (
          <>
            <Stack.Screen
              name={RouterNavs.OPTIONAL_LOGIN}
              component={OptionLogin}
            />
            <Stack.Screen name={RouterNavs.LOGIN} component={Login} />
            <Stack.Screen name={RouterNavs.REGISTER} component={Register} />
          </>
        ) : (
          <>
            <Stack.Screen name={RouterNavs.HOME} component={Home} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
