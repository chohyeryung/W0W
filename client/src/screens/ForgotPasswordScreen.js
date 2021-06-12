import React, { createRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';
import styles from '../styles/SignInStyles';
import 'react-native-gesture-handler';
import axios from 'axios';
import * as MailComposer from 'expo-mail-composer';

export default class ForgotPasswordScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            result: {},
            errorText: '',
        };
        this.setUserEmail = this.setUserEmail.bind(this);
        this.setErrorText = this.setErrorText.bind(this);

    }

    setUserEmail(email) {
        this.setState(state => ({
            userEmail: email
        }))
    }

    setErrorText(text) {
        this.setState(state => ({
            errorText: text
        }))
    }

    handleSubmitPress() {

        this.setErrorText('');
        if (!this.state.userEmail) {
            this.setErrorText('이메일을 입력해주세요');
            return;
        }

        let body = {
            email: this.state.userEmail,
        }

        const request = axios({
            method: 'post',
            data: body,
            url: 'https://c03b8fa24254.ngrok.io/users/forgot_password',
            changeOrigin: true,
        }).then((response) =>{
            return [response.data.sendSuccess, response.data.message];
        })
        request.then(res=> {
            if(res[0]){
                MailComposer.composeAsync({
                    subject: 'W0W - 비밀번호 알려드립니다',
                    body: '123456',
                    recipients: [this.state.userEmail],
                    isHtml: true,
                })
                alert('이메일로 비밀번호를 보내드렸습니다!')
                this.props.navigation.navigate('SignIn')
            }else{
                this.setErrorText(res[1]);
            }
        })
    }

    render() {

        const { errorText } = this.state;

        return (
            
                <View style={styles.container}>
                    <ScrollView>
                        {/* header */}
                <View style={styles.header}>
                    <Text style={styles.sub_text}>Forgot</Text>
                    <Text style={styles.main_text}>Password</Text>
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
                            keyboardType="email-address"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                        {errorText != '' ? (
                            <Text style={{marginTop:10, color:'#ff4d4d'}}>{errorText}</Text>
                        ) : null }
                    </View>
                    </View>
                    <View style={{ flex: 3, justifyContent: 'flex-end' }}>
                        {/* sign in button */}
                        <TouchableOpacity style={[styles.login_btn]} onPress={this.handleSubmitPress}>
                            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', marginTop: 18, }}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}