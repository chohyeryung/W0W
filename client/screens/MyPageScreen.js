import React from 'react';
import { 
    View,
    Text,
} from 'react-native';

import styles from "../styles/MyPageStyles";

const MyPageScreen = (props) => {
    return(
        <View style={styles.container}>
            <View>

                <Text style={styles.topTitle}>MY ZERO</Text>
            </View>
            
        </View>
    )
}

export default MyPageScreen;