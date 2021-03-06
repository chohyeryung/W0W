import { StatusBar } from 'expo-status-bar';
import React , {Component}from 'react';
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
import MainScreen from './src/screens/MainScreen';
import MapScreen from './src/screens/MapScreen'
import AuthLoadingScreen from './src/screens/AuthLoadingScreen'
import rootReducer from './src/_reducers/index';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import QrcodeScannerScreen from './src/screens/QrcodeScannerScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware, thunk));

export default class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            
        

              <Stack.Screen
                name="AuthLoadingScreen"
                component={AuthLoadingScreen}
                options={{
                  headerShown: false, 
                  title: '',
                }}
              /> 

              <Stack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{
                  headerShown: false, 
                  title: '',
                }}/>
  

           
              <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{
                headerShown: false,
                title: '',
                }}
              />
                
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
              <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                  headerShown: false, 
                  title: '',}}
              />
              
              <Stack.Screen
                name="QrcodeScreen"
                component={QrcodeScannerScreen}
                options={{
                  headerShown: false, 
                  title: '',
                }}/>
              
              <Stack.Screen
                name="ForgotPasswordScreen"
                component={ForgotPasswordScreen}
                options={{
                  headerShown: false, 
                  title: '',
                }}/>
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                headerShown: false, 
                title: '',
                }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
