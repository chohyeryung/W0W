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
        width: 105, height:105, marginLeft: 65
    },
    {
        imageId: 2,
        src: courIcon,
        width: 138, height:74, marginLeft: 50
    },
    {
        imageId: 3,
        src: trashIcon,
        width: 110, height:110, marginLeft: 65
    },
    {
        imageId: 4,
        src: recycleIcon,
        width: 100, height: 90, marginLeft: 70
    },
    {
        imageId: 5,
        src: transIcon,
        width: 100, height:110, marginLeft: 70
    },
    {
        imageId: 6,
        src: etcIcon,
        width:100, height:100, marginLeft: 70
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
    }

    componentDidMount() {

        // axios({
        //     method: 'post',
        //     data: body,
        //     url: 'http://localhost:5000/mypage/cate',
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

        // axios.post('http://localhost:5000/mypage/cate', {userId: userData.userId})
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
        
        axios.get('http://localhost:5000/mypage/cate')
            .then(response => {
                datas: response.data.map( data => {
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

    toggleSettingCModal = () => {
        this.setState({settingCModal: !this.state.settingCModal})
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
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>카테고리</Text>
                            {cates.map((cate, index) => {
                                return (
                                    <TouchableOpacity
                                        key={cate.category}
                                        onPress={(e) => this.toggleSettingModal(cate.category)}>
                                        <View style={styles.cateCon} onClick={this.handleClick}>
                                            {/* <Image
                                            source={require(`../../assets/1.png`)}
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
                                            
                                            ]} /> */}
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