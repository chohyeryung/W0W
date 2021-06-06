import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
} from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

import Modal from './Modal';
import styles from "../styles/MyPageStyles";

export class MyPageScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { cates: [
            { _id: { category: '종이빨대' }, category: '종이빨대', cnt: 0 },
            { _id: { category: '용기내' }, category: '용기내', cnt: 0 },
            { _id: { category: '쓰레기줍기' }, category: '쓰레기줍기', cnt: 0 },
            { _id: { category: '분리수거' }, category: '분리수거', cnt: 0 },
            { _id: { category: '대중교통' }, category: '대중교통', cnt: 0 },
            { _id: { category: '기타' }, category: '기타', cnt: 0 }
        ],
        settingModal: false,
        curCate: '',
        };
    }

    componentDidMount() {

        axios.get('http://localhost:5000/mypage/cate')
            .then(response => {
                datas: response.data.map( data =>
                    {
                        const { cates } = this.state;
                        this.setState({
                            cates: cates.map( cate => 
                                cate.category == data.category
                                ? cate = data
                                : cate
                            )
                        })
                    }
                )
              
            })
    }
    
    toggleSettingModal = (cate) => {
        this.setState({
          settingModal: !this.state.settingModal,
          curCate: cate,
        })
    }

    _fetchCate = () => {
        axios.post('http://localhost:5000/mypage/pointing', {ca : this.state.curCate})
        .then(response => {
            axios.get('http://localhost:5000/mypage/cate')
            .then(response => {
                datas: response.data.map( data =>
                    {
                        const { cates } = this.state;
                        this.setState({
                            cates: cates.map( cate => 
                                cate.category == data.category
                                ? cate = data
                                : cate
                            )
                        })
                    }
                )
            })
        });

        this.toggleSettingModal();
    }


    render(){
        const { cates } = this.state;

        return(
            <ImageBackground
            style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity>
                            <Ionicons 
                                 name="chevron-back-sharp" size={50} style={styles.backIcon}
                                 onPress={() => props.navigation.navigate('SignIn')}/> 
                        </TouchableOpacity>
                        <Text style={styles.topTitle}>MY ZERO</Text>
                    </View>
        
                    <ScrollView 
                    style={styles.cateContainer}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    contentContainerStyle={{
                        alignItems: 'center',
                        paddingStart: 5,
                        paddingEnd: 5
                    }}>
                        {cates.map((cate, index) => {
                            return (
                                <TouchableOpacity
                                    key={cate.category}
                                    onPress={(e) => this.toggleSettingModal(cate.category)}>
                                    <View style={styles.cateCon} onClick={this.handleClick}>
                                        <Text style={styles.text_count}>{cate.cnt}</Text>
                                        <Text style={styles.text_title}>{cate.category}</Text>
                                    </View> 
                                </TouchableOpacity>
                            ) 
                        })}
                    </ScrollView>
                </View>
                { this.state.settingModal ? 
                <Modal modalHandler = {() => this.toggleSettingModal()} 
                       cate = {this.state.curCate} 
                       settingHandler = {() => this._fetchCate()}/> : <></> }
                </ImageBackground>
            // <></>
        )
    }

    
}

export default MyPageScreen;