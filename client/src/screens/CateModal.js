import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { cateList } from '../data/cateList';
import styles from "../styles/CateModalStyle";

export default class Setting extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                style={styles.background} 
                activeOpacity={1} //깜빡이 효과 해제
                onPress={this.props.modalHandler}/>
                <View style={styles.modal}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>MY ZERO GUIDE</Text>
                        <TouchableOpacity>
                            <Ionicons 
                                name="close-circle-outline" size={50}
                                onPress={() => this.props.modalHandler()}/>
                        </TouchableOpacity>
                    </View>
                    <Text>환경을 돕는 제로 웨이스트 활동 실천 횟수</Text>
                    {cateList.map((cate, index) => {
                        return (
                            <View style={styles.cateCon}>
                                <Image
                                source={require(`../../assets/${index+1}.png`)}
                                style={[styles.cateImage,
                                (index == 0 ?
                                    {width: 110, height:110, marginLeft: 65}
                                    :(index == 1 ?
                                        {width: 145, height:77, marginLeft: 50}
                                        :(index == 2 ?
                                            {width: 110, height:110, marginLeft: 65}
                                            :(index == 4 ?
                                                {width: 110, height:120, marginLeft: 70}
                                                :(index == 5 ?
                                                    {width: 110, height:110, marginLeft: 70}
                                                    :{width:110, height:100, marginLeft: 70})))))
                                
                                ]} />
                                <View style={styles.cateTextView}>
                                    <Text style={styles.text_title}>{cate.category}</Text>
                                    <Text style={styles.text_count}>{cate.explan}</Text>
                                </View>
                            </View> 
                        ) 
                    })}
                </View>
            </View>
        );
    }
}

