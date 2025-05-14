import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/auth-context';
import * as Sentry from '@sentry/react-native';
import Toast from 'react-native-toast-message';
import Navigation from './src/navigation/StackNavigation';
import {StatusBar} from 'react-native';

Sentry.init({
  dsn: 'https://db2c341da84cc494b0a1f57b4ee9e9a5@o4509055856279552.ingest.us.sentry.io/4509055856541696',
});

export default Sentry.wrap(function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <>
      <StatusBar backgroundColor={'#F4777C'} />
      <NavigationContainer>
        <AuthProvider>
          <Navigation />
          <Toast />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
});
