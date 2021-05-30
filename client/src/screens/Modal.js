import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';

export default class Setting extends React.Component {

    render() {
        return (
            <View  style={styles.container}>
            <TouchableOpacity 
            style={styles.background} 
            activeOpacity={1} //깜빡이 효과 해제
            onPress={this.props.modalHandler}/>
            <View style={styles.modal}>
                <Text style={styles.titleText}>{this.props.cate}</Text>
                <Text>적립하시겠습니까?</Text>
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

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent'
      },
      background: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'
      },
      ddayInput: {
        backgroundColor: 'white',
        marginBottom: 20,
        width: '75%',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#a5a5a5'
      },
      modal: {
        marginHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: '50%',
        backgroundColor: 'white',
      },
      doneText: {
        color: 'rgb(1,123,255)',
        fontSize: 15,
        margin: 10
      },
      titleText: {
        fontSize: 18,
        margin: 10
      }
});