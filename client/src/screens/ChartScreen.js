import React, { Component } from 'react';
import { View, Text, Dimensions, AsyncStorage, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Rect, Text as TextSVG, Svg } from "react-native-svg";

import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { _getLastYYYYMM, _getYYYYMM } from "../Fuction";
import styles from "../styles/ChartStyle";
import Loader from './Loader';

export default class Chart extends Component {
  constructor(props) {
      super(props);
      this.state = { 
        cates: [
          { _id: { category: '장바구니 이용' }, category: '장바구니 이용', cnt: 0 },
          { _id: { category: '용기내' }, category: '용기내', cnt: 0 },
          { _id: { category: '쓰레기 줍기' }, category: '쓰레기 줍기', cnt: 0 },
          { _id: { category: '분리수거' }, category: '분리수거', cnt: 0 },
          { _id: { category: '대중교통 이용' }, category: '대중교통 이용', cnt: 0 },
          { _id: { category: '기타' }, category: '기타', cnt: 0 }
        ],
        loading: false,
        months: [{_id: {created: _getLastYYYYMM()}, total: 0}, {_id: {created: _getYYYYMM()}, total: 0}],
    }
  }

  componentDidMount = async() => {
    const userData = await AsyncStorage.getItem('userData');
    const userId = JSON.parse(userData).userId
    
    this.setState({ loading: true });
    // 그래프 data componentDidMount()
    await axios.post('https://wow.emirim.kr/mypage/cate', {
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
    
    // 지난 달, 이번 달 data componentDidMount()
    await axios.post('https://wow.emirim.kr/mypage/statistics', { user_id: userId })
    .then(res => {

      res.data.map( data => {
        const { months } = this.state;
        this.setState({
          months: months.map(month => 
            month._id.created == data._id.created
            ? month = data
            : month
          )
        })
      })
    })
    .catch((err)=>alert(err)) 

    this.setState({ loading: false });

  }



  render() {
    const { cates, loading, months } = this.state;

    return (
      loading ?
      ( <Loader type="spin" color="#f6dba5" /> )
      : (
        <View style={styles.Container}>
        <View style={styles.firCon}>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Ionicons 
                    name="chevron-back-outline" size={50} style={{ marginLeft: -8, marginBottom: 80 }}
                    onPress={() => this.props.navigation.navigate('MainScreen')}/>
            </TouchableOpacity>
            <Text style={{ fontSize: 38, fontWeight: 'bold', marginBottom: 30}}>STATISTICS</Text>
            <View style={styles.staContainer}>
              {months.map((month, index) => (
                  <View style={styles.contentCon} key={index}>
                    <View style={styles.totalCon}>
                      <Text style={styles.text_total}>+{month.total}</Text>
                      <Text style={styles.text_created}>
                        {[
                          month._id.created == _getYYYYMM() ?
                          '이번달'
                          : '지난달'
                        ]}
                      </Text>
                    </View>
                    <View style={[
                      styles.line,
                      month._id.created == _getYYYYMM() ?
                      { backgroundColor: '#FFE071', width: 10 }
                      : {backgroundColor: '#FF6060', width: 10 }
                    ]}/>
                  </View>
              ))}
            </View>
            
        </View>

        <View style={styles.lineBox}>
            <Text style={{ marginBottom: 30 }}>
              <Text style={{fontSize: 38, fontWeight: 'bold'}}>CATEGORY </Text>
              <Text style={{ color: '#fff', fontSize: 40, fontWeight: 'bold', textShadowColor:'#000',
              textShadowOffset:{width: 0, height: 0},
              textShadowRadius:2, }}>GRAPH</Text>
            </Text>
            <LineChart
            data = {{
                labels: cates.map(cate => cate.category),
                datasets: [{
                    data: cates.map(cate => cate.cnt),
                    color: (opacity = 0.8) => `rgba(53, 201, 201, ${opacity})`, 
                    strokeWidth: 2 
                }],
            }}
            
            width={Dimensions.get('window').width-120}
            height={400}
            yAxisInterval={1}
            chartConfig={{
                backgroundColor:'#fff',
                backgroundGradientFrom:"#fff",
                backgroundGradientTo:"#fff",
                fillShadowGradient: '#35C9C9',
                fillShadowGradientOpacity: 0.7,
                decimalPlaces:1,
                color:(opacity=1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor:(opacity=1) => `rgba(0, 0, 0, ${opacity})`,
                propsForDots: {
                  r: "4",
                  strokeWidth: "2",
                  stroke: "#35C9C9"
                },
            }}

            bezier
            fromZero
            style={{
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#000',
              flexDirection:'row',
              justifyContent: 'center',
              paddingTop: 30,
              paddingLeft: 15,
              paddingVertical: 5,
              backgroundColor: '#fff',
            }} 
            
            />
        </View>

      </View>
      )

      
    )
  }
}