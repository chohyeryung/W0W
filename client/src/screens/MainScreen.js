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
            imgSrc : '',
            sea_OY : false,
            sea_GB : false,
            sea_BN : false,
            sea_YG :  false
        };

        this.setMiddleText = this.setMiddleText.bind(this);
        this.setBottomText = this.setBottomText.bind(this);
        this.setImgSrc = this.setImgSrc.bind(this);
        this.sea_YG = this.setSea_YG.bind(this);
        this.sea_OY = this.setSea_OY.bind(this);
        this.sea_BN = this.setSea_BN.bind(this);
        this.sea_GB = this.setSea_GB.bind(this);
        this._bootstrapAsync();

      
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

    setSea_GB(bool) {
        this.setState(state => ({
            sea_GB: bool
        }))
    }

    setSea_BN(bool) {
        this.setState(state => ({
            sea_BN: bool
        }))
    }

    setSea_OY(bool) {
        this.setState(state => ({
            sea_OY: bool
        }))
    }

    setSea_YG(bool) {
        this.setState(state => ({
            sea_YG: bool
        }))
    }
        

    _bootstrapAsync = async () => {
        const userData = await AsyncStorage.getItem('userData');
        const userId = JSON.parse(userData).userId
        axios.get(`http://ec2-34-227-38-106.compute-1.amazonaws.com/main/main/${userId}`)
        .then(res => {
            if(res.data.length!=0 && res.data.num!=0){
                this.setMiddleText(res.data.num+"%")
                this.setBottomText("SAVING")

                this.setImgSrc(res.data.src)
                if(res.data.src=="sea_BN") this.setSea_BN(true)
                else if(res.data.src=="sea_OY") this.setSea_OY(true)
                else if(res.data.src == "sea_YG") this.setSea_YG(true)
                else this.setSea_GB(true)
                
            }else{
                this.setSea_OY(true)
            }
        })
        .catch((err)=>alert(err)) 

    };

   
    _handleVideoRef = component => {
        const playbackObject = component;
        playbackObject.setStatusAsync({ shouldPlay: true });
    }

    render(){

        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>                  
                    <Text style={styles.topText}>WITH</Text>
                    <Text style={styles.middleText}>{this.state.middleText}</Text>
                    <Text style={styles.bottomText}>{this.state.bottomText}</Text>
                </View>
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
                        {this.state.sea_BN && <Video
                            ref={this._handleVideoRef}
                            style={styles.video_BN}
                            source={{
                            uri: `http://ec2-34-227-38-106.compute-1.amazonaws.com/uploads/sea_BN.mp4`,
                            }}
                            resizeMode="contain"
                            isLooping
                        />}
                        {this.state.sea_GB && <Video
                            ref={this._handleVideoRef}
                            style={styles.video_GB}
                            source={{
                            uri: `http://ec2-34-227-38-106.compute-1.amazonaws.com/uploads/sea_GB.mp4`,
                            }}
                            resizeMode="contain"
                            isLooping
                        />}
                        {this.state.sea_OY && <Video
                            ref={this._handleVideoRef}
                            style={styles.video_OY}
                            source={{
                            uri: `http://ec2-34-227-38-106.compute-1.amazonaws.com/uploads/sea_OY.mp4`,
                            }}
                            resizeMode="contain"
                            isLooping
                        />}
                        { this.state.seaYG  && <Video
                            ref={this._handleVideoRef}
                            style={styles.video_YG}
                            source={{
                            uri: `http://ec2-34-227-38-106.compute-1.amazonaws.com/uploads/sea_YG.mp4`,
                            }}
                            resizeMode="contain"
                            isLooping
                        />}
                    </View>
                </View>
            </View>
        )
    }
    
}

export default MainScreen;