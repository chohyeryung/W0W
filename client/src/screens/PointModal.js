import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from "../styles/PointModalStyles";

export default class Setting extends React.Component {

    render() {
        return (
            <View style={styles.container}>
            <TouchableOpacity 
            style={styles.background} 
            activeOpacity={1} //깜빡이 효과 해제
            onPress={this.props.modalHandler}/>
            <View style={styles.modal}>
                <Text style={styles.titleText}>{this.props.cate}에 적립하시겠어요?</Text>
                <TextInput/>
                <View style={styles.selectTextCon}>
                    <TouchableOpacity onPress = {() => this.props.settingHandler()}>
                        <Text style={styles.doneText}>
                            예
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.modalCancelHandler}>
                        <Text style={styles.cancelText}>
                            아니요
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        );
    }
}

