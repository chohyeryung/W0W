import React, {useState} from 'react';
import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import styles from '../styles/RegisterStyles';
import 'react-native-gesture-handler';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/_actions/user_action';

const RegisterScreen = (props) => { 

    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userPasswordchk, setUserPasswordchk] = useState('');
    const [errorText, setErrorText] = useState('');

    const handleSubmitButton = () => {
        setErrorText('');

        if(!userName) {
            alert('이름을 입력해주세요');
            return;
        }
        if(!userEmail) {
            alert('이메일을 입력해주세요');
            return;
        }
        if(!userPassword) {
            alert('비밀번호를 입력해주세요');
            return;
        }
        if(userPasswordchk != userPassword) {
            alert('비밀번호가 일치하지 않습니다');
            return;
        }

        let body = {
            name : userName,
            email : userEmail,
            password : userPassword
        }
        
        dispatch(registerUser(body))
        .then(response => {
            if(response.payload.registerSuccess){
                alert('회원가입이 완료되었습니다.')
                props.navigation.navigate('SignIn')
            } else { 
                setErrorText(response.payload.message);
            }
        })
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.main_text}>W0W</Text>
                <Text style={styles.sub_text}>With zerO Waste</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.register_text}>회원가입</Text>
                <View style={styles.input_box}>
                    <Text style={styles.input_text}>이름</Text>
                    <TextInput style={styles.input}
                        placeholder="이름을 입력해주세요"
                        onChangeText={(userName) => setUserName(userName)}
                        autoCapitalize="none"
                    />
                    <Text style={styles.input_text}>이메일</Text>
                    <TextInput style={styles.input}
                        placeholder="이메일을 입력해주세요"
                        onChangeText={(userEmail) => setUserEmail(userEmail)}
                        autoCapitalize="none"
                    />
                    <Text style={styles.input_text}>비밀번호</Text>
                    <TextInput style={styles.input}
                        placeholder="비밀번호를 입력해주세요"
                        onChangeText={(userPassword) => setUserPassword(userPassword)}
                        autoCapitalize="none"
                    />
                    <Text style={styles.input_text}>비밀번호 확인</Text>
                    <TextInput style={styles.input}
                        placeholder="비밀번호를 다시 입력해주세요"
                        onChangeText={(userPasswordchk) => setUserPasswordchk(userPasswordchk)}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity style={[styles.register_btn]} onPress={handleSubmitButton}>
                        <Text style={{color: '#fff', fontSize: 20, alignSelf: 'center', marginTop: 15, fontWeight:'bold',}}>회원가입</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 0.5, justifyContent: 'center'}}>
                    {userPassword !== userPasswordchk ? (
                    <Text style={styles.TextValidation}>
                        비밀번호가 일치하지 않습니다.
                    </Text>
                    ) : null}
                </View>

                {errorText != '' ? (
                        <Text style={{marginTop:10, color:'#ff4d4d'}}>{errorText}</Text>
                    ) : null }
            </View>
        </View>
    )
}

export default RegisterScreen;