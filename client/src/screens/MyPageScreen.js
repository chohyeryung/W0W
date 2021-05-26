import React, { useEffect, useState } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import axios from 'axios';

import { Ionicons } from '@expo/vector-icons';

import styles from "../styles/MyPageStyles";

const MyPageScreen = (props) => {

    useEffect(() => {
        axios.get('http://localhost:5000/mypage/cate')
            .then(response => {console.log(response.data)})
    }, [])


    const [cateContent, setCateContent] = useState({
        courage: '',
        transport: '',
        waste: '',
        trash: '',
        basket: '',
        etc: ''
    })

    const handleClick = (e) => {
        console.log(e.preventDefault())
    }
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <Ionicons 
                        name="chevron-back-sharp" size={50} style={styles.backIcon}
                        onPress={() => props.navigation.navigate('SignIn')}/>
                </TouchableOpacity>
                <Text style={styles.topTitle}>MY ZERO</Text>
            </View>
            <View style={styles.cateContainer}>
                <View style={styles.cateFirst}>
                    <View style={styles.cate} onClick={handleClick}>
                        <Text style={styles.text_count}>0</Text>
                        <Text style={styles.text_title}>용기내</Text>
                    </View>
                    <View style={styles.cate}>
                        <Text style={styles.text_count}>0</Text>
                        <Text style={styles.text_title}>대중교통</Text>
                    </View>
                    <View style={styles.cate}>
                        <Text style={styles.text_count}>0</Text>
                        <Text style={styles.text_title}>분리수거</Text>
                    </View>
                </View>
                <View style={styles.cateSecond}>
                    <View style={styles.cate}>
                        <Text style={styles.text_count}>0</Text>
                        <Text style={styles.text_title}>쓰레기줍기</Text>
                    </View>
                    <View style={styles.cate}>
                        <Text style={styles.text_count}>0</Text>
                        <Text style={styles.text_title}>종이빨대</Text>
                    </View>
                    <View style={styles.cate}>
                        <Text style={styles.text_count}>0</Text>
                        <Text style={styles.text_title}>기타</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default MyPageScreen;