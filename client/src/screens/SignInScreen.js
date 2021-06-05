import React, { createRef, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Keyboard,
} from 'react-native';

import styles from '../styles/SignInStyles';
import 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../_actions/user_action';

class SignInScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            userEmail: '',
            userPassword: '',
            errorText: '',
        };
    }

    render() {

        const { checked } = this.state;

        return (
            <View style={styles.container}>
            {/* header */}
            <View style={styles.header}>
                <Text style={styles.main_text}>W0W</Text>
                <Text style={styles.sub_text}>With zerO Waste</Text>
            </View>
            {/* footer */}
            <View style={styles.footer}>
                <Text style={styles.sign_in_text}>로그인</Text>
                {/* footer - input box */}
                <View style={styles.input_box}>
                    <Text style={[styles.text_title, {
                        marginTop: 60}]}>E-mail</Text>
                    <TextInput
                        style={[styles.text_input, {marginTop: 10}]}
                        placeholder="이메일을 입력해주세요"
                        placeholderTextColor="#707070"
                        autoCapitalize="none"
                        onChangeText={(userEmail) => setUserEmail(userEmail)}
                        onSubmitEditing={() =>
                            passwordInputRef.current && passwordInputRef.current.focus()
                        }
                        keyboardType="email-address"
                        returnKeyType="next"
                        blurOnSubmit={false}
                        />
                    <Text style={[styles.text_title, {
                        marginTop: 30}]}>Password</Text>
                    <TextInput
                        style={[styles.text_input, {marginTop: 10}]}
                        placeholder="비밀번호를 입력해주세요"
                        placeholderTextColor="#707070"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        ref={passwordInputRef}
                        keyboardType="default"
                        returnKeyType="next"
                        onChangeText={(userPassword) => setUserPassword(userPassword)}
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                    />
                    {errorText != '' ? (
                        <Text style={{marginTop:10, color:'#ff4d4d'}}>{errorText}</Text>
                    ) : null }
                    {/* checkbox */}
                    <View style={{marginTop: 10}}>
                        <TouchableOpacity onPressOut={onChecked} style={{flexDirection: 'row'}}>
                            {checked ? (
                                <View style={styles.check_icon}>
                                    <Icon name="checkbox" size={20} color="#A0CAF3"></Icon>
                                </View>
                            ) : (
                                <View style={styles.uncheck_icon}>
                                    <Icon name="checkbox-outline" size={20} color="#707070" />
                                </View>
                            )}
                            <Text style={{marginTop: 3, marginLeft: 6, color: '#707070'}}>로그인 상태 유지</Text>
                        </TouchableOpacity>
                    </View>
                    {/* sign in button */}
                    <TouchableOpacity style={[styles.login_btn]} onPress={handleSubmitPress}>
                        <Text style={{color: '#fff', fontSize: 20, alignSelf: 'center', marginTop: 15, fontWeight: 'bold'}}>로그인</Text>
                    </TouchableOpacity>
                    {/* side menu */}
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, paddingHorizontal: 5}}>
                        <Text
                            style={{color: '#707070'}}
                            onPress={() => props.navigation.navigate('Chart')}>
                            회원가입
                        </Text>
                        <View><Text style={{color: '#707070'}} onPress={() => props.navigation.navigate('MainScreen')}>비밀번호 찾기</Text></View>
                    </View>
                </View>
            </View>
        </View>
        )
    }
}

const SignInScreen = (props) => {
    const dispatch = useDispatch();

    

    const passwordInputRef = createRef();

    const onChecked = (e) => {
        setChecked(!checked);
    }

    const handleSubmitPress = () => {

        setErrorText('');
        if (!userEmail) {
            setErrorText('아이디를 입력해주세요');
            return;
        }
        if (!userPassword) {
            setErrorText('비밀번호를 입력해주세요');
            return;
        }

        let body = {
            email: userEmail,
            password: userPassword
        }

        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    alert('로그인 성공')
                } else {
                    setErrorText(response.payload.message)
                }
            })

    }

}

export default SignInScreen;