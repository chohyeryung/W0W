import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './screens/SignInScreen';
import rootReducer from './redux/_reducers/index';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware, thunk));

export default function App() {
  return (
    <Provider store={store}>
      <SignInScreen />
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
