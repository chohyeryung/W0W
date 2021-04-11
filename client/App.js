import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image
} from 'react-native';
import SignInScreen from './screens/SignInScreen';
import RegisterScreen from './screens/RegisterScreen';
import rootReducer from './redux/_reducers/index';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware, thunk));

const BGCOLOR_CODE = '#6CDDBF'

const MyCustomHeaderBackImage = () => (
  <Image
      source={require('./assets/back.png')}
      style={{marginLeft: 10, width: 22, height: 22}}
  />
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                  headerShown: false, 
                  title: ''}}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{
                headerBackTitleVisible: false,
                title: '',
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: BGCOLOR_CODE,
                },
                headerBackImage: MyCustomHeaderBackImage,}}/>
          </Stack.Navigator>
      </NavigationContainer>
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
