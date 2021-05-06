import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from "../styles/MyPageStyles";

const MyPageScreen = (props) => {
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
                    <View style={styles.cate}>
                        <Text style={styles.text_count}>27</Text>
                        <Text style={styles.text_title}>용기내</Text>
                    </View>
                    <View style={styles.cate}>
                        <Text style={styles.text_count}>30</Text>
                        <Text style={styles.text_title}>대중교통</Text>
                    </View>
                    <View style={styles.cate}>
                        <Text style={styles.text_count}>1</Text>
                        <Text style={styles.text_title}>분리수거</Text>
                    </View>
                </View>
                <View style={styles.cateSecond}>
                <View style={styles.cate}>
                        <Text style={styles.text_count}>27</Text>
                        <Text style={styles.text_title}>쓰레기줍기</Text>
                    </View>
                    <View style={styles.cate}>
                        <Text style={styles.text_count}>27</Text>
                        <Text style={styles.text_title}>종이빨대</Text>
                    </View>
                    <View style={styles.cate}>
                        <Text style={styles.text_count}>10</Text>
                        <Text style={styles.text_title}>?</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default MyPageScreen;