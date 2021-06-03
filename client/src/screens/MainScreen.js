import React from 'react';
import {
    View,
    Image,
    Text, 
    TextInput, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import styles from '../styles/MainStyle';

const MainScreen = (props) => { 

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>                  
                <Image
                style={styles.mainText}
                source={require('../image/main/WITH_ZERO_WASTE.png')}/>
            </View>
            <View style={styles.footerContainer}>
                <View style={styles.icon}>
                    <Image
                    style={styles.category_icon}
                    source={require('../image/main/category_icon.png')} />
                    <Image
                    style={styles.statistics_icon}
                    source={require('../image/main/statistics_icon.png')} />
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

export default MainScreen;