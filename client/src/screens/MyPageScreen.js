import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
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
            { _id: { category: '장바구니 이용' }, category: '장바구니 이용', cnt: 0 },
            { _id: { category: '용기내' }, category: '용기내', cnt: 0 },
            { _id: { category: '쓰레기줍기' }, category: '쓰레기줍기', cnt: 0 },
            { _id: { category: '분리수거' }, category: '분리수거', cnt: 0 },
            { _id: { category: '대중교통 이용' }, category: '대중교통 이용', cnt: 0 },
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
                        {/* <TouchableOpacity>
                            <Ionicons 
                                name="chevron-back-sharp" size={50} style={styles.backIcon}
                                onPress={() => props.navigation.navigate('SignIn')}/>
                        </TouchableOpacity> */}
                        <View style={styles.headThCon}>
                            <Text style={styles.topTitle}>쬬이오셩님</Text>
                            <View style={styles.iconCon}>
                                <TouchableOpacity>
                                    <Ionicons 
                                        name="help-circle-outline" size={50} style={styles.helpIcon}
                                        onPress={() => props.navigation.navigate('SignIn')}/>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionicons 
                                        name="exit-outline" size={50} style={styles.logoutIcon}
                                        onPress={() => props.navigation.navigate('SignIn')}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                        <Text style={styles.subTitle}>MY ZERO</Text>
                    </View>
                
                    <View stlye={styles.conCon}>
                        <View style={styles.cateContainer}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>카테고리</Text>
                            {cates.map((cate, index) => {
                                return (
                                    <TouchableOpacity
                                        key={cate.category}
                                        onPress={(e) => this.toggleSettingModal(cate.category)}>
                                        <View style={styles.cateCon} onClick={this.handleClick}>
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
                                                <Text style={styles.text_count}>실천 횟수 : {cate.cnt}</Text>
                                            </View>
                                        </View> 
                                    </TouchableOpacity>
                                ) 
                            })}
                        </View>
                    </View>
                    
                
                </View>
                { this.state.settingModal ? 
                <Modal modalHandler = {() => this.toggleSettingModal()} 
                        cate = {this.state.curCate} 
                        settingHandler = {() => this._fetchCate()}/> : <></> }
            </ImageBackground>
        )
    }

    
}

export default MyPageScreen;