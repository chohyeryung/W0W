import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Checkbox
} from 'react-native';

const BGCOLOR_CODE = '#6CDDBF'

const SignInScreen = () => {
    const [isSelected, setSelection] = useState(false);

    const onChange = (e) => {
        setSelection(e.target.checked)
    }

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
                    <Text style={[styles.input_text, {
                        marginTop: 60}]}>E-mail</Text>
                    <TextInput
                        style={[styles.text_input, {marginTop: 10}]}
                        placeholder="이메일을 입력해주세요"
                        placeholderTextColor="#707070"
                        autoCapitalize="none" />
                    <Text style={[styles.input_text, {
                        marginTop: 30}]}>Password</Text>
                    <TextInput
                        style={[styles.text_input, {marginTop: 10}]}
                        placeholder="비밀번호를 입력해주세요"
                        placeholderTextColor="#707070"
                        autoCapitalize="none" />
                    {/* checkbox */}
                    {/* sign in button */}
                    <TouchableOpacity style={[styles.login_btn]}>
                        <Text style={{color: '#fff', fontSize: 20, alignSelf: 'center', marginTop: 15}}>로그인</Text>
                    </TouchableOpacity>
                    {/* side menu */}
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, paddingHorizontal: 5}}>
                        <View><Text style={{color: '#707070'}}>회원가입</Text></View>
                        <View><Text style={{color: '#707070'}}>비밀번호 찾기</Text></View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: BGCOLOR_CODE
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    main_text: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
    },
    sub_text: {
        color: '#fff',
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 10
    },
    footer: {
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
    input_box: {
        marginHorizontal: 10,
    },
    sign_in_text: {
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 25,
    },
    text_input: {
        borderBottomColor: BGCOLOR_CODE,
        borderBottomWidth: 1,
        paddingBottom: 5,
        opacity: 0.5,
    },
    login_btn: {
        marginTop: 70,
        backgroundColor: BGCOLOR_CODE,
        height: 50,
        borderRadius: 10,
    }
})

export default SignInScreen;