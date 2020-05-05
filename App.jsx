import './src/config/reactotron/reactotron';
import React, { Component } from 'react';
import { StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';
import AppHome from './src/App';

export default class App extends Component {
  render() {
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
  }
}
