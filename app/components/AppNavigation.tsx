import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { useSelector } from 'react-redux';
import RouterNavs from '../constants/Routes';
import _loadFonts from '../resources/fonts/LoadFonts';
import Home from '../screens/Home';
import Loading from '../screens/Loading';
import Login from '../screens/Login';
import OptionLogin from '../screens/OptionLogin';
import Register from '../screens/Register';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();
const StackShare = createSharedElementStackNavigator();

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
    <>
      <NavigationContainer>
        <StackShare.Navigator headerMode='none'>
          {!token || token === '' ? (
            <>
              <StackShare.Screen
                name={RouterNavs.OPTIONAL_LOGIN}
                component={OptionLogin}
              />
              <StackShare.Screen name={RouterNavs.LOGIN} component={Login} />
              <StackShare.Screen
                name={RouterNavs.REGISTER}
                component={Register}
              />
            </>
          ) : (
            <>
              <StackShare.Screen name={RouterNavs.HOME} component={Home} />
              <StackShare.Screen
                name={RouterNavs.PROFILE_USER}
                component={Profile}
                options={() => ({
                  cardStyleInterpolator: ({ current: { progress } }) => {
                    return { cardStyle: { opacity: progress } };
                  },
                  cardStyle: { backgroundColor: 'transparent' },
                  transitionSpec: {
                    open: { animation: 'spring', config: { duration: 500 } },
                    close: { animation: 'spring', config: { duration: 500 } },
                  },
                })}
              />
            </>
          )}
        </StackShare.Navigator>
      </NavigationContainer>
    </>
  );
}
