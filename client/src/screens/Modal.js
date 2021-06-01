import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from "../styles/ModalStyles";

export default class Setting extends React.Component {

    render() {
        return (
            <View style={styles.container}>
            <TouchableOpacity 
            style={styles.background} 
            activeOpacity={1} //깜빡이 효과 해제
            onPress={this.props.modalHandler}/>
            <View style={styles.modal}>
                <Text style={styles.titleText}>{this.props.cate}</Text>
                <Text style={styles.subText}>적립하시겠습니까?</Text>
                <TextInput/>
                <TouchableOpacity onPress = {() => this.props.settingHandler()}>
                <Text style={styles.doneText}>
                    예
                </Text>
                </TouchableOpacity>
            </View>
            </View>
        );
    }
}

