import React, { createRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Keyboard,
    ScrollView
} from 'react-native';

import styles from '../styles/RegisterStyles';
import 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { FancyAlert } from 'react-native-expo-fancy-alerts'
import config from '../data/privacy';

class RegisterScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            modal_clicked: false,
            userName: '',
            userEmail: '',
            userPassword: '',
            errorText: '',
        };
        this.emailInputRef = createRef();
        this.passwordInputRef = createRef();

        this.onChecked = this.onChecked.bind(this);
        this.onModalChecked = this.onModalChecked.bind(this);
        this.setUserName = this.setUserName.bind(this);
        this.setUserEmail = this.setUserEmail.bind(this);
        this.setUserPassword = this.setUserPassword.bind(this);
        this.setErrorText = this.setErrorText.bind(this);
        this.handleSubmitPress = this.handleSubmitPress.bind(this);
    }

    onChecked() {
        this.setState(state => ({
            checked: !state.checked
        }))
    }

    onModalChecked() {
        this.setState(state => ({
            modal_clicked: !state.modal_clicked
        }))
    }

    setUserName(name) {
        this.setState(state => ({
            userName: name
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

        this.setErrorText('');
        if (!this.state.userName) {
            this.setErrorText('이름을 입력해주세요');
        }
        if (!this.state.userEmail) {
            this.setErrorText('아이디를 입력해주세요');
            return;
        }
        if (!this.state.userPassword) {
            this.setErrorText('비밀번호를 입력해주세요');
            return;
        }
        if (!this.state.checked) {
            this.setErrorText('개인정보 동의에 체크해주세요');
            return;
        }

        let body = {
            name: this.state.userName,
            email: this.state.userEmail,
            password: this.state.userPassword
        }

        const request = axios({
            method: 'post',
            data: body,
            url: 'https://wow.emirim.kr/users/register',
            changeOrigin: true,
        }).then((response) =>{
            return [response.data.registerSuccess, response.data.message];
        })

        request.then(res=> {
            if(res[0]){
                this.props.navigation.navigate('SignIn')
            }else{
                this.setErrorText(res[1]);
            }
        })
        
      
    }

    render() {

        const { checked, errorText } = this.state;
        const passwordInputRef = this.passwordInputRef;
        const emailInputRef = this.emailInputRef;

        return (
                <View style={styles.container}>
                    <ScrollView>
                        {/* header */}
                    <View style={styles.header}>
                        <Text style={styles.sub_text}>Create your</Text>
                        <Text style={styles.main_text}>Account</Text>
                    </View>
                    {/* footer */}
                    <View style={{ flex: 2 }}>
                        {/* footer - input box */}
                        <View>
                            <Text style={[styles.text_title, {
                                marginTop: 60}]}>Name</Text>
                            <TextInput
                                style={[styles.text_input, {marginTop: 10}]}
                                placeholder="Name"
                                placeholderTextColor="#C4C4C4"
                                autoCapitalize="none"
                                onChangeText={(userName) => this.setUserName(userName)}
                                onSubmitEditing={() =>
                                    emailInputRef.current && emailInputRef.current.focus()
                                }
                                keyboardType="default"
                                returnKeyType="next"
                                blurOnSubmit={false}
                                />
                            <Text style={[styles.text_title, {
                                marginTop: 60}]}>E-mail</Text>
                            <TextInput
                                style={[styles.text_input, {marginTop: 10}]}
                                placeholder="Email"
                                placeholderTextColor="#C4C4C4"
                                autoCapitalize="none"
                                ref={emailInputRef}
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
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginBottom: 80 }}>
                                <View>
                                    <TouchableOpacity onPressOut={this.onChecked}>
                                    {checked ? (
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon name="checkbox" size={22} color="#35C9C9"></Icon>
                                            <Text style={{ marginLeft: 5, fontSize: 15, }}>개인정보 동의</Text>
                                        </View>
                                    ) : (
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon name="checkbox-outline" size={22} color="#35C9C9" />
                                            <Text style={{ marginLeft: 5, fontSize: 15 }}>개인정보 동의</Text>
                                        </View>
                                    )}
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPressOut={this.onModalChecked}>
                                        <Text style={{ color: '#35C9C9', fontSize: 15 }}>자세히 보기</Text>
                                    </TouchableOpacity>
                                </View>    
                            </View>
                        </View>
                        </View>
                        <View style={{ flex: 3, justifyContent: 'flex-end' }}>
                            {/* sign in button */}
                            <TouchableOpacity style={[styles.login_btn]} onPress={this.handleSubmitPress}>
                                <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', marginTop: 18, }}>Sign Up</Text>
                            </TouchableOpacity>
                            {/* side menu */}
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, paddingHorizontal: 150 }}>
                            <View><Text style={{ fontSize: 15 }}>Already have a account?</Text></View>
                                <Text
                                    style={{ fontSize: 15, color: '#35C9C9' }}
                                    onPress={() => this.props.navigation.navigate('SignIn')}>
                                    Log In
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                    <FancyAlert
                        visible={this.state.modal_clicked}
                        icon={<View style={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#35C9C9',
                            borderRadius: 50,
                            width: '100%',
                        }}><Text>🔔</Text></View>}
                        style={{ backgroundColor: 'white' }}
                        >
                        <ScrollView style={{ height: 700 }}>
                            <Text style={{ marginBottom: 16 }}>
                              {config.TEXT}
                            </Text>
                        </ScrollView>
                        <TouchableOpacity style={{ padding: 15, marginTop: 40, marginBottom: 10, color: '#fff', backgroundColor: '#35C9C9', borderRadius: 50, width: '100%' }} onPress={() => this.onModalChecked() }>
                            <Text style={{ textAlign: 'center', color: 'white' }}>OK</Text>
                        </TouchableOpacity>
                    </FancyAlert>
                </View>
        )
    }
}

export default RegisterScreen;