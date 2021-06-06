import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import {
    View,
    Image,
    Text, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import styles from '../styles/MainStyle';

export class MainScreen extends Component {

    // constructor(props) {
    //     // try {
    //     //     const value = await AsyncStorage.getItem('TASKS');
    //     //     if (value !== null) {
    //     //       // We have data!!
    //     //       console.log(value);
    //     //     }
    //     //   } catch (error) {
    //     //     // Error retrieving data
    //     //   }

    // }
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
                        <TouchableOpacity onPress={() => this.navigation.navigate('Chart')}>
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