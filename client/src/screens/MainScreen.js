import React, { Component, useState } from 'react';
import {
    View,
    Image,
    Text, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import styles from '../styles/MainStyle';

export class MainScreen extends Component {

    
    render(){

        // const [score, setScore] = useState('ZERO');
    // const [endText, setEndTExt] = useState('WASTE');


        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>                  
                    <Text style={styles.mainText}>WITH</Text>
                    <Text style={styles.middleText}>ZERO</Text>
                    <Text style={styles.middleText}>WASTE</Text>
                </View>
                <View style={styles.footerContainer}>
                    <View style={styles.icon}>
                        <TouchableOpacity onPress={() => navigation.navigate('MyPage')}>
                            <Image
                            style={styles.category_icon}
                            source={require('../image/main/category_icon.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Chart')}>
                            <Image
                            style={styles.statistics_icon}
                            source={require('../image/main/statistics_icon.png')} />
                        </TouchableOpacity>
                        <Image
                        style={styles.map_icon}
                        source={require('../image/main/map_icon.png')} />
                        <Image
                        style={styles.qr_icon}
                        source={require('../image/main/qr_icon.png')} />
                    </View>
                    <View styles={styles.mov}>
                        
                    </View>
                </View>
            </View>
        )
    }
    
}

export default MainScreen;