import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    AsyncStorage
} from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

import Modal from './PointModal';
import CModal from './CateModal';
import styles from "../styles/MyPageStyles";
import Loader from './Loader';

import bowlIcon from '../image/mypage/1.png';
import courIcon from '../image/mypage/2.png';
import trashIcon from '../image/mypage/3.png';
import recycleIcon from '../image/mypage/4.png';
import transIcon from '../image/mypage/5.png';
import etcIcon from '../image/mypage/6.png';

const iconsInfo = [
    {
        imageId: 1,
        src: bowlIcon,
        width: 86, height:85, marginLeft: 55
    },
    {
        imageId: 2,
        src: courIcon,
        width: 108, height:57.5, marginLeft: 45
    },
    {
        imageId: 3,
        src: trashIcon,
        width: 92, height:90, marginLeft: 50
    },
    {
        imageId: 4,
        src: recycleIcon,
        width: 85, height: 74, marginLeft: 55
    },
    {
        imageId: 5,
        src: transIcon,
        width: 82, height:92, marginLeft: 55
    },
    {
        imageId: 6,
        src: etcIcon,
        width:85.8, height:85.5, marginLeft: 55
    },
]

export class MyPageScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { cates: [
                { id:1, _id: { category: '장바구니 이용' }, category: '장바구니 이용', cnt: 0 },
                { id:2, _id: { category: '용기내' }, category: '용기내', cnt: 0 },
                { id:3, _id: { category: '쓰레기 줍기' }, category: '쓰레기 줍기', cnt: 0 },
                { id:4, _id: { category: '분리수거' }, category: '분리수거', cnt: 0 },
                { id:5, _id: { category: '대중교통 이용' }, category: '대중교통 이용', cnt: 0 },
                { id:6, _id: { category: '기타' }, category: '기타', cnt: 0 }
            ],
            loading: false,
            settingModal: false,
            settingCModal: false,
            curCate: '',
            userName: ''
        };

    }

    componentDidMount = async () => {
        this.setState({settingCModal: false})

        const userData = await AsyncStorage.getItem('userData');
        const userId = JSON.parse(userData).userId

        this.setState({ loading: true });

        //사용자 이름
        await axios.post('http://ec2-34-227-38-106.compute-1.amazonaws.com/mypage/name', {
            user_id: userId
        }).then(res => {
            this.setState({userName: res.data[0].name});
        })
        .catch((err)=>alert(err)) 

        await axios.post('http://ec2-34-227-38-106.compute-1.amazonaws.com/mypage/cate', {
            user_id: userId
        }).then(res => {
            datas: res.data.map( data => {
                const { cates } = this.state;
                this.setState({
                    cates: cates.map( cate => 
                        cate.category == data.category
                        ? cate = data
                        : cate
                    )
                })
            })
        })
        .catch((err)=>alert(err)) 

        this.setState({ loading: false });
    }
    
    toggleSettingModal = (cate) => {
        this.setState({
          settingModal: !this.state.settingModal,
          curCate: cate,
        })
    }

    toggleSettingCModal = () => {
        this.setState({settingCModal: !this.state.settingCModal})
    }

    handleLogout = async() => {
        await AsyncStorage.removeItem('userData');
        
        this.props.navigation.navigate('SignIn');
    }

    _fetchCate = async() => {
        const userData = await AsyncStorage.getItem('userData');
        const userId = JSON.parse(userData).userId

        axios.post('http://ec2-34-227-38-106.compute-1.amazonaws.com/mypage/pointing', {ca : this.state.curCate, user_id: userId})
        .then(res => {
            axios.post('http://ec2-34-227-38-106.compute-1.amazonaws.com/mypage/cate', { user_id: userId })
            .then(res => {
                datas: res.data.map( data =>
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
        const { cates, loading, userName } = this.state;
        
        return(
            loading ?
            ( <Loader type="spin" color="#f6dba5" /> )
            : (
                <ImageBackground
                style={{width: '100%', height: '100%'}}>
                    <View style={styles.container}>
                        <View style={styles.headerContainer}>
                            <TouchableOpacity>
                                <Ionicons 
                                    name="chevron-back-outline" size={60} style={{marginLeft: -8, marginBottom: 10}}
                                    onPress={() => this.props.navigation.navigate('MainScreen')}/>
                            </TouchableOpacity>
                            <View style={styles.headThCon}>
                                <Text style={styles.topTitle}>{userName}님의</Text>
                                <View style={styles.iconCon}>
                                    <TouchableOpacity onPress={() => this.toggleSettingCModal()}>
                                        <Image source={require('../image/mypage/c_help_icon.png')} style={{ width: 70, height: 70 }}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.handleLogout()}>
                                        <Image source={require('../image/mypage/logout_icon.png')} style={{ width: 47, height: 45 }}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            
                            <Text style={styles.subTitle}>MY ZERO</Text>
                        </View>
                    
                        <View stlye={styles.conCon}>
                            <View style={styles.cateContainer}>
                                <Text style={{ fontSize: 28, marginBottom: 20, }}>카테고리</Text>
                                {cates.map((cate, index) => {
                                    return (
                                        <TouchableOpacity
                                            key={cate.index}
                                            onPress={(e) => this.toggleSettingModal(cate.category)}>
                                            <View key={cate.index}
                                                style={[ index+1!==6 ? styles.cateCon : 
                                            [styles.cateCon, {borderBottomWidth: 1, borderStyle: 'solid', borderBottomColor: '#fff',  paddingBottom: 20,}]]} onClick={this.handleClick}>
                                                {iconsInfo.map((item) => ([
                                                item.imageId === (index+1) ?
                                                (
                                                    <Image
                                                    source={item.src}
                                                    key={item.imageId}
                                                    style={{
                                                        width: item.width,
                                                        height: item.height,
                                                        marginLeft: item.marginLeft,
                                                        marginRight: 0
                                                    }}/>
                                                ) : <></>
                                                ]))}
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
    
                    { this.state.settingCModal ? 
                    <CModal modalHandler = {() => this.toggleSettingCModal()} /> : <></> }
                </ImageBackground>
            )
        )
    }
    
}

export default MyPageScreen;