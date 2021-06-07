import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import {Video} from 'expo-av';
import {
    View,
    Image,
    Text, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import styles from '../styles/MainStyle';

export class MainScreen extends Component {

    constructor(props) {
        super(props);
    }
    render(){

        return (
            <View style={styles.container}>
                {/* <View style={styles.headerContainer}>                   */}
                    <Text style={styles.topText}>WITH</Text>
                    <Text style={styles.middleText}>ZERO</Text>
                    <Text style={styles.bottomText}>WASTE</Text>
                {/* </View> */}
                <View style={styles.footerContainer}>
                    <View style={styles.icon}>
                        <TouchableOpacity onPress={() =>  AsyncStorage.removeItem('userData')}>
                            <Image
                            style={styles.category_icon}
                            source={require('../image/main/category_icon.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Chart')}>
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
                    <Video
                        // ref={video}
                        style={styles.video}
                        source={{
                        uri: 'https://78d25616f33f.ngrok.io/uploads/sea_BN.mp4',
                        }}
                        shouldPlay="true"
                        resizeMode="contain"
                        isLooping
                    />
                    </View>
                </View>
            </View>
        )
    }
    
}

export default MainScreen;