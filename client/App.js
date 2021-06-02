import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image
} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import MyPageScreen from './src/screens/MyPageScreen';
import ChartScreen from './src/screens/ChartScreen';
import rootReducer from './src/_reducers/index';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware, thunk));

const mainColor = '#E1F0FF'

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
                title: '',}}
            />

             {/* <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{
                headerBackTitleVisible: false,
                title: '',
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: mainColor,
                },
                headerBackImage: MyCustomHeaderBackImage,}}
              /> */}
              
            <Stack.Screen
              name="MyPage"
              component={MyPageScreen}
              options={{
                headerShown: false, 
                title: '',
              }}/>

              <Stack.Screen
              name="Chart"
              component={ChartScreen}
              options={{
                headerShown: false, 
                title: '',
              }}/>
              
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
