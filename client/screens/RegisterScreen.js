import React, {useState} from 'react';
import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import 'react-native-gesture-handler';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/_actions/user_action';
  
const BGCOLOR_CODE = '#6CDDBF'

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

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: BGCOLOR_CODE
    },
    header:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    main_text:{
        fontSize:35,
        fontWeight:'bold',
        color:'white'
    },
    sub_text:{
        fontSize:28,
        color:'white'
    },  
    footer:{
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginHorizontal: 20,
        borderColor: '#9DD4C5',
        borderWidth: 2,
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    register_text:{
        fontSize:25,
        marginTop:40,
        alignSelf:'center',
        fontWeight:'bold'
    },
    input_box:{
        marginVertical:40,
        marginHorizontal:20
    },
    input_text:{
        fontWeight:'bold',
        marginBottom:15
    },
    input:{
        borderBottomColor:BGCOLOR_CODE,
        borderBottomWidth:1,
        marginBottom:20,
        opacity:0.6,
        paddingBottom:10
    },
    register_btn:{
        backgroundColor:BGCOLOR_CODE,
        borderRadius:10,
        height:55,
        marginTop:70,
    }

})

export default RegisterScreen;