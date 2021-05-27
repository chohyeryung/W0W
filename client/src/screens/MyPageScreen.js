import React, { useEffect, useState } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

import cateData from "../data/cate_data.json";
import styles from "../styles/MyPageStyles";

const MyPageScreen = (props) => {
    const [cates, setCates] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/mypage/cate')
            .then(response => {
                setCates(response.data);
            })
    }, [])

    handleClick = () => {
        console.log(this);
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
                {cates.map((cate, index) => {
                    return index < 3 ? (
                        <View style={styles.cateFirst}>
                            <View style={styles.cateCon} onClick={this.handleClick}>
                                <Text style={styles.text_count}>{cate.cnt}</Text>
                                <Text style={styles.text_title}>{cate.category}</Text>
                            </View>    
                        </View>
                    ) : (
                        <View style={styles.cateSecond}>
                            <View style={styles.cateCon}>
                                <Text style={styles.text_count}>{cate.cnt}</Text>
                                <Text style={styles.text_title}>{cate.category}</Text>
                            </View>    
                        </View>
                    )
                })}
            </View>

            {/* <View style={styles.cateContainer}>
                <View style={styles.cateFirst}>
                    <View style={styles.cate} onClick={handleClick}>
                        <Text style={styles.text_count}>0</Text>
                        <Text style={styles.text_title}>종이빨대</Text>
                    </View>
                    <View style={styles.cate}>
                        <Text style={styles.text_count}>0</Text>
                        <Text style={styles.text_title}>용기내</Text>
                    </View>
                    <View style={styles.cate}>
                        <Text style={styles.text_count}>0</Text>
                        <Text style={styles.text_title}>쓰레기줍기</Text>
                    </View>
                </View>
                <View style={styles.cateSecond}>
                    <View style={styles.cate}>
                        <Text style={styles.text_count}>0</Text>
                        <Text style={styles.text_title}>분리수거</Text>
                    </View>
                    <View style={styles.cate}>
                        <Text style={styles.text_count}>0</Text>
                        <Text style={styles.text_title}>대중교통</Text>
                    </View>
                    <View style={styles.cate}>
                        <Text style={styles.text_count}>0</Text>
                        <Text style={styles.text_title}>기타</Text>
                    </View>
                </View>
            </View> */}

           
        </View>
    )
}

export default MyPageScreen;