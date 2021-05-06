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
            
        </View>
    )
}

export default MyPageScreen;