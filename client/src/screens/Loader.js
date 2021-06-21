import React from 'react';
import {View, Image, Text, Animated} from 'react-native';

import styles from "../styles/LoaderStyle";

export default class Loader extends React.Component {

    constructor() {
        super();
        this.state = {
            animation: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.sequence([
            Animated.delay(100),
            Animated.loop(
                Animated.timing(
                    this.state.animation,
                    {
                        toValue: 2,
                        duration: 3000,
                        useNativeDriver: true
                    }
                )
            )
        ]).start();
        
    }

    render() {

        const animationStyles = {
            transform: [
                {
                    rotateY: this.state.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '360deg']
                    })
                }
            ],
            width: 300, height: 300
        };

        return (
            <View style={[styles.LoadCon]}>
                <Text style={{ textAlign: 'center', fontSize: 32, marginBottom: 50, fontWeight: 'bold' }}>바다가 정화되고 있습니다 ...</Text>
                <Animated.Image source={require('../image/mypage/loading_icon.png')} 
                    style={animationStyles}/>
            </View>
        );
    }
}