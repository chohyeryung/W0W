import React, { createRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Keyboard,
    ScrollView
} from 'react-native';
import { AsyncStorage } from 'react-native';
import styles from '../styles/SignInStyles';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { loginUser } from '../_actions/user_action';
import { connect } from 'react-redux';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

class SignInScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            userEmail: '',
            userPassword: '',
            result: {},
            errorText: '',
        };
        this.passwordInputRef = createRef();

        this.onChecked = this.onChecked.bind(this);
        this.setUserEmail = this.setUserEmail.bind(this);
        this.setUserPassword = this.setUserPassword.bind(this);
        this.setErrorText = this.setErrorText.bind(this);
        this.setResult = this.setResult.bind(this);
        this.handleSubmitPress = this.handleSubmitPress.bind(this);
        // this.navigation = useNavigation();

    }

    onChecked() {
        this.setState(state => ({
            checked: !state.checked
        }))
    }

    setResult(result) {
        this.setState(state => ({
            result: result
        }))
    }

    setUserEmail(email) {
        this.setState(state => ({
            userEmail: email
        }))
    }

    setUserPassword(password) {
        this.setState(state => ({
            userPassword: password
        }))
    }

    setErrorText(text) {
        this.setState(state => ({
            errorText: text
        }))
    }


    handleSubmitPress() {
        const { loginUser, loginSuccess, message } = this.props;

        this.setErrorText('');
        if (!this.state.userEmail) {
            this.setErrorText('아이디를 입력해주세요');
            return;
        }
        if (!this.state.userPassword) {
            this.setErrorText('비밀번호를 입력해주세요');
            return;
        }

        let body = {
            email: this.state.userEmail,
            password: this.state.userPassword
        }

        const request = axios({
            method: 'post',
            data: body,
            url: 'https://78d25616f33f.ngrok.io/users/login',
            changeOrigin: true,
        }).then((response) =>{
            AsyncStorage.setItem(
                'userData',
                JSON.stringify({
                  token: response.data.token,
                  userId: response.data.userId
                })
              );
            return response.data.loginSuccess ;
        })

        request.then(res=> {
            if(res){
                this.props.navigation.navigate('MainScreen')
            }else{
                this.setErrorText("다시 한번 확인해주세요");
            }
        })
        
      
    }

    render() {

        const { checked, errorText } = this.state;
        const passwordInputRef = this.passwordInputRef;

        return (
            <View style={styles.container}>
            {/* header */}
            <View style={styles.header}>
                <Text style={styles.sub_text}>Welcome to</Text>
                <Text style={styles.main_text}>W0W.</Text>
            </View>
            {/* footer */}
            <View style={{ flex: 2, marginTop: 100 }}>
                {/* footer - input box */}
                <View>
                    <Text style={[styles.text_title, {
                        marginTop: 60}]}>E-mail</Text>
                    <TextInput
                        style={[styles.text_input, {marginTop: 10}]}
                        placeholder="Email"
                        placeholderTextColor="#C4C4C4"
                        autoCapitalize="none"
                        onChangeText={(userEmail) => this.setUserEmail(userEmail)}
                        onSubmitEditing={() =>
                            passwordInputRef.current && passwordInputRef.current.focus()
                        }
                        keyboardType="email-address"
                        returnKeyType="next"
                        blurOnSubmit={false}
                        />
                    <Text style={[styles.text_title, {
                        marginTop: 50}]}>Password</Text>
                    <TextInput
                        style={[styles.text_input, {marginTop: 10}]}
                        placeholder="Password"
                        placeholderTextColor="#C4C4C4"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        ref={passwordInputRef}
                        keyboardType="default"
                        returnKeyType="next"
                        onChangeText={(userPassword) => this.setUserPassword(userPassword)}
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                    />
                    {errorText != '' ? (
                        <Text style={{marginTop:10, color:'#ff4d4d'}}>{errorText}</Text>
                    ) : null }
                    {/* checkbox */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View>
                            <TouchableOpacity onPressOut={this.onChecked}>
                            {checked ? (
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="checkbox" size={22} color="#35C9C9"></Icon>
                                    <Text style={{ marginLeft: 5, fontSize: 15, }}>Stay Logged in</Text>
                                </View>
                            ) : (
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="checkbox-outline" size={22} color="#35C9C9" />
                                    <Text style={{ marginLeft: 5, fontSize: 15 }}>Stay Logged in</Text>
                                </View>
                            )}
                            </TouchableOpacity>
                        </View>
                        <View><Text style={{ color: '#35C9C9', fontSize: 15 }}>Forgot Password?</Text></View>
                    </View>
                </View>
                </View>
                <View style={{ flex: 3, marginTop: 150 }}>
                    {/* sign in button */}
                    <TouchableOpacity style={[styles.login_btn]} onPress={this.handleSubmitPress}>
                        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', marginTop: 18, }}>Log In</Text>
                    </TouchableOpacity>
                    {/* side menu */}
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, paddingHorizontal: 150 }}>
                    <View><Text style={{ fontSize: 15 }}>Don't have a account?</Text></View>
                        <Text
                            style={{ fontSize: 15, color: '#35C9C9' }}
                            onPress={() => this.props.navigation.navigate('MainScreen')}>
                            Sign up
                        </Text>
                    </View>
                </View>
        </View>
        )
    }
}

const mapStateToProps = state => ({
    payload: state.payload,
})

const mapDispatchToProps = {
    loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);