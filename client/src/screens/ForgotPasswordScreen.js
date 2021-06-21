import React, { createRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';
import styles from '../styles/ForgotPassStyles';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import 'react-native-gesture-handler';
import axios from 'axios';

class ForgotPasswordScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            result: {},
            errorText: '',
            success: false,
        };
        this.setUserEmail = this.setUserEmail.bind(this);
        this.setErrorText = this.setErrorText.bind(this);
        this.handleSubmitPress = this.handleSubmitPress.bind(this);
        this.setSuccess = this.setSuccess.bind(this);

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

    setSuccess(value) {
        this.setState(state => ({
            success: value
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
            url: 'https://wow.emirim.kr/users/forgot_password',
            changeOrigin: true,
        }).then((response) =>{
            return [response.data.sendSuccess, response.data.message];
        })
        request.then(res=> {
            if(res[0]){
                axios({
                    method: 'post',
                    data: body,
                    url: 'https://wow-mail.herokuapp.com/send_email',
                    changeOrigin: true,
                }).then((response) => {
                    if(response.data.sendSuccess) {
                        this.setSuccess(true);
                    }
                })
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
                    <Text style={styles.sub_text}>비밀번호를</Text>
                    <Text style={styles.main_text}>잊어버리셨나요?</Text>
                    <Text style={styles.info_text}>와우에 가입했던 이메일을 입력해주세요.</Text>
                    <Text style={{ fontSize: 20 }}>비밀번호 재설정 메일을 보내드립니다.</Text>
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
                            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', marginTop: 18, }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <FancyAlert
                    visible={this.state.success}
                    icon={<View style={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#35C9C9',
                        borderRadius: 50,
                        width: '100%',
                    }}><Text>👌</Text></View>}
                    style={{ backgroundColor: 'white' }}
                    >
                    <Text style={{ marginTop: -16, marginBottom: 32, textAlign: 'center' }}>이메일을 보내는데 성공하였습니다! {"\n"}이메일을 확인해주세요!</Text>
                    <TouchableOpacity style={{ padding: 15, marginTop: 10, marginBottom: 10, color: '#fff', backgroundColor: '#35C9C9', borderRadius: 50, width: '100%' }} onPress={() => this.props.navigation.navigate('SignIn')}>
                        <Text style={{ color: '#ffffff', textAlign: 'center' }}>OK</Text>
                    </TouchableOpacity>
                </FancyAlert>
            </View>
        )
    }
}
export default ForgotPasswordScreen;