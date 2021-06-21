import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

class AuthLoadingScreen extends React.Component {
    constructor() {
      super();
      this._bootstrapAsync();
    }
    _bootstrapAsync = async () => {
      const userData = await AsyncStorage.getItem('userData');
      if(userData){
        const login=JSON.parse(userData).login
        this.props.navigation.navigate(login ? 'MainScreen' : 'SignIn');
      }else{
        this.props.navigation.navigate('SignIn');
      }

    };
    render() {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default AuthLoadingScreen;
