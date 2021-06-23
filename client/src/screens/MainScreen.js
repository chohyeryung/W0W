import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import {Video} from 'expo-av';
import axios from 'axios';

import {
    View,
    Image,
    Text, 
    TouchableOpacity,
} from 'react-native';

import styles from '../styles/MainStyle';
import Loader from './Loader';

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
            sea_YG :  false,
            loading: false,
        };
     
      }

    componentDidMount = async () => {
  
        this.setState({ loading: true });
        const userData = await AsyncStorage.getItem('userData');
        const userId = JSON.parse(userData).userId
        axios.get(`https://wow.emirim.kr/main/main/${userId}`)
        .then(res => {
            if(res.data.length!=0 && res.data.num!=0){
                this.setState({ middleText : res.data.num+"%" });
                this.setState({ bottomText : "SAVING" });
                this.setState({ imgSrc : res.data.src });
                if(res.data.src=="sea_BN"){
                    this.setState({ sea_BN : true });
                }else if(res.data.src=="sea_OY"){
                    this.setState({ sea_OY : true });
                }
                else if(res.data.src == "sea_YG"){
                    this.setState({ sea_YG : true });
                } 
                else {
                    this.setState({ sea_GB : true });
                }
            }else{
                this.setState({ sea_OY : true });


            }
            this.setState({ loading: false });

        })
        .catch((err)=>alert("데이터를 불러오는데 실패했습니다."))

    }


   
    _handleVideoRef = component => {
        try{
            const playbackObject = component;
            playbackObject.setStatusAsync({ shouldPlay: true });

        }catch(e){
            console.log("동영상을 불러오는데 실패했습니다.")
        }
       
    }

    render(){
        const { middleText,bottomText,sea_BN,sea_YG,sea_GB,sea_OY,loading } = this.state;

        return (
            loading ?
            ( <Loader type="spin" color="#f6dba5" /> )
            : <View style={styles.container}>
                <View style={styles.headerContainer}>                  
                    <Text style={styles.topText}>WITH</Text>
                    <Text style={styles.middleText}>{middleText}</Text>
                    <Text style={styles.bottomText}>{bottomText}</Text>
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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MapScreen')}>

                        <Image
                        style={styles.map_icon}
                        source={require('../image/main/map_icon.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('QrcodeScreen')}>
                            <Image
                            style={styles.qr_icon}
                            source={require('../image/main/qr_icon.png')} />
                        </TouchableOpacity>
                    </View>
                    <View styles={styles.mov}>
                        {sea_BN && <Video
                            ref={this._handleVideoRef}
                            style={styles.video_BN}
                            source={{
                            uri: `https://wow.emirim.kr/uploads/sea_BN.mp4`,
                            }}
                            resizeMode="contain"
                            isLooping
                        />}
                        {sea_GB && <Video
                            ref={this._handleVideoRef}
                            style={styles.video_OY}
                            source={{
                            uri: `https://wow.emirim.kr/uploads/sea_GB.mp4`,
                            }}
                            resizeMode="contain"
                            isLooping
                        />}
                        {sea_OY && <Video
                            ref={this._handleVideoRef}
                            style={styles.video_OY}
                            source={{
                            uri: `https://wow.emirim.kr/uploads/sea_OY.mp4`,
                            }}
                            resizeMode="contain"
                            isLooping
                        />}
                        { sea_YG  && <Video
                            ref={this._handleVideoRef}
                            style={styles.video_YG}
                            source={{
                            uri: `https://wow.emirim.kr/uploads/sea_YG.mp4`,
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