import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import {Video} from 'expo-av';
import axios from 'axios';

import {
    View,
    Image,
    Text, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import styles from '../styles/MainStyle';

export class MainScreen extends Component {

    constructor() {
        super();
        this.state = {
            middleText: 'ZERO',
            bottomText: 'WASTE',
            imgSrc : ''
        };

        this.setMiddleText = this.setMiddleText.bind(this);
        this.setBottomText = this.setBottomText.bind(this);
        this.setImgSrc = this.setImgSrc.bind(this);

        this._bootstrapAsync();


        axios.get('http://localhost:5000/main/main')
        .then(res => {
            if(res.data.length!=0 && res.data[0].total!=0){
                this.setMiddleText(res.data[0].total+"%")
                this.setBottomText("SAVING")
                // this.setImgSrc()
            }

        })  
      }


    setMiddleText(MiddleText) {
        this.setState(state => ({
            middleText: MiddleText
        }))
    }

    setBottomText(BottomText) {
        this.setState(state => ({
            bottomText: BottomText
        }))
    }

    setImgSrc(src) {
        this.setState(state => ({
            imgSrc: src
        }))
    }
        
    _bootstrapAsync = async () => {
        const userData = await AsyncStorage.getItem('userData');
        // alert(userData)
    };

    _handleVideoRef = component => {
        const playbackObject = component;
        playbackObject.setStatusAsync({ shouldPlay: true });
    }

    render(){

        return (
            <View style={styles.container}>
                {/* <View style={styles.headerContainer}>                   */}
                    <Text style={styles.topText}>WITH</Text>
                    <Text style={styles.middleText}>{this.state.middleText}</Text>
                    <Text style={styles.bottomText}>{this.state.bottomText}</Text>
                {/* </View> */}
                <View style={styles.footerContainer}>
                    <View style={styles.icon}>
                        <TouchableOpacity onPress={() =>   this.props.navigation.navigate('MyPage')}>
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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('QrcodeScreen')}>
                            <Image
                            style={styles.qr_icon}
                            source={require('../image/main/qr_icon.png')} />
                        </TouchableOpacity>
                    </View>
                    <View styles={styles.mov}>
                    <Video
                        ref={this._handleVideoRef}
                        style={styles.video}
                        source={{
                        uri: '  https://9f697b2cf7da.ngrok.io/uploads/sea_BN.mp4',
                        }}
                        // useNativeControls
                        // shouldPlay="true"
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