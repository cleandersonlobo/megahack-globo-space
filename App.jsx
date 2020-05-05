import './src/config/reactotron/reactotron';
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useFonts } from '@use-expo/font';
import { setCustomText } from 'react-native-global-props';
import { AppLoading } from 'expo';
import { store, persistor } from './src/store';
import AppHome from './src/App';

const customTextProps = {
  style: {
    fontFamily: 'Ubuntu',
  },
};
const App = () => {
  const [fontsLoaded] = useFonts({
    Ubuntu: require('./assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
    'Ubuntu-Medium': require('./assets/fonts/Ubuntu-Medium.ttf'),
    'Ubuntu-Light': require('./assets/fonts/Ubuntu-Light.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  setCustomText(customTextProps);
  return (
    <Provider store={store}>
      <StatusBar
        barStyle={{ ios: 'dark-content', android: 'light-content' }[Platform.OS]}
        backgroundColor="#ffffff"
      />
      <PersistGate persistor={persistor}>
        <AppHome />
      </PersistGate>
    </Provider>
  );
};

export default App;
