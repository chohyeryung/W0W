import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    ScrollView,
    AsyncStorage
} from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

import Modal from './PointModal';
import CModal from './CateModal';
import styles from "../styles/MyPageStyles";

import bowlIcon from '../../assets/1.png';
import courIcon from '../../assets/2.png';
import trashIcon from '../../assets/3.png';
import recycleIcon from '../../assets/4.png';
import transIcon from '../../assets/5.png';
import etcIcon from '../../assets/6.png';

const iconsInfo = [
    {
        imageId: 1,
        src: bowlIcon,
        width: 86, height:85, marginLeft: 60
    },
    {
        imageId: 2,
        src: courIcon,
        width: 108, height:57.5, marginLeft: 45
    },
    {
        imageId: 3,
        src: trashIcon,
        width: 92, height:90, marginLeft: 55
    },
    {
        imageId: 4,
        src: recycleIcon,
        width: 85, height: 74, marginLeft: 60
    },
    {
        imageId: 5,
        src: transIcon,
        width: 82, height:92, marginLeft: 60
    },
    {
        imageId: 6,
        src: etcIcon,
        width:85.8, height:85, marginLeft: 55
    },
]

export class MyPageScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { cates: [
            { _id: { category: '장바구니 이용' }, category: '장바구니 이용', cnt: 0 },
            { _id: { category: '용기내' }, category: '용기내', cnt: 0 },
            { _id: { category: '쓰레기 줍기' }, category: '쓰레기 줍기', cnt: 0 },
            { _id: { category: '분리수거' }, category: '분리수거', cnt: 0 },
            { _id: { category: '대중교통 이용' }, category: '대중교통 이용', cnt: 0 },
            { _id: { category: '기타' }, category: '기타', cnt: 0 }
        ],
        settingModal: false,
        settingCModal: false,
        curCate: '',
        };

        // this._bootstrapAsync();
    }

    componentDidMount = async () => {
        const userData = await AsyncStorage.getItem('userData');
        const userId = JSON.parse(userData).userId
        axios.post('http://ec2-34-227-38-106.compute-1.amazonaws.com/mypage/cate', {
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


        // axios({
        //     method: 'post',
        //     data: body,
        //     url: ' https://c7af7e6e7a28.ngrok.io/mypage/cate',
        //     changeOrigin: true,
        // }).then((response) => {
        //     AsyncStorage.getItem(
        //         'userData', 
        //         JSON.stringify({
        //             userId: response.data.userId
        //     }))
        // })
        // const userData = await AsyncStorage.getItem('userData');
    //   alert(userData)

        // axios.post(' https://c7af7e6e7a28.ngrok.io/mypage/cate', {userId: userData.userId})
        //     .then(response => {
        //         datas: response.data.map( data => {
        //             const { cates } = this.state;
        //             this.setState({
        //                 cates: cates.map( cate => 
        //                     cate.category == data.category
        //                     ? cate = data
        //                     : cate
        //                 )
        //             })
        //         }
        //     )
        // })
        
        // axios.get('http://e1b32a057e61.ngrok.io/mypage/cate')
        //     .then(response => {
        //         datas: response.data.map( data => {
        //             const { cates } = this.state;
        //             this.setState({
        //                 cates: cates.map( cate => 
        //                     cate.category == data.category
        //                     ? cate = data
        //                     : cate
        //                 )
        //             })
        //         }
        //     )
              
        // })
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

    _fetchCate = async() => {
        const userData = await AsyncStorage.getItem('userData');
        const userId = JSON.parse(userData).userId
        axios.post(' http://e1b32a057e61.ngrok.io/mypage/pointing', {ca : this.state.curCate, user_id: userId})
        .then(res => {
            axios.post(' http://e1b32a057e61.ngrok.io/mypage/cate', { user_id: userId })
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
                                        onPress={() => this.toggleSettingCModal()}/>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionicons 
                                        name="exit-outline" size={50} style={styles.logoutIcon}/>
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
                                        key={cate.category}
                                        onPress={(e) => this.toggleSettingModal(cate.category)}>
                                        <View style={[ index+1!==6 ? styles.cateCon : 
                                        [styles.cateCon, {borderBottomWidth: 1, borderStyle: 'solid', borderBottomColor: '#fff',  paddingBottom: 20,}]]} onClick={this.handleClick}>
                                            {iconsInfo.map((item) => ([
                                            item.imageId === (index+1) ?
                                            (
                                                <Image
                                                source={item.src}
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
    }

    
}

export default MyPageScreen;