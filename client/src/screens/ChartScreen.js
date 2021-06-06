import React, { Component } from 'react';
import { View, Text, Dimensions, DotContent } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Rect, Text as TextSVG, Svg } from "react-native-svg";

import axios from 'axios';
import { _getLastYYYYMM, _getYYYYMM } from "../Fuction";
import styles from "../styles/ChartStyle";

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
        months: [{_id: {created: _getLastYYYYMM()}, total: 0}, {_id: {created: _getYYYYMM()}, total: 0}],
    }
  }

  componentDidMount() {

    // 그래프 data componentDidMount()
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
    
    // 지난 달, 이번 달 data componentDidMount()
    axios.get('http://localhost:5000/mypage/statistics')
    .then(response => {

      datas: response.data.map( data =>
          {
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

  }


  render() {
    const { cates, months } = this.state;

    return (
      <View style={styles.Container}>
        <View style={styles.firCon}>
            <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 30}}>STATISTICS A</Text>
            <View style={styles.staContainer}>
              {months.map((month) => (
                  <View style={styles.contentCon}>
                    <View style={styles.totalCon}>
                      <Text style={styles.text_total}>+{month.total}</Text>
                      <Text style={styles.text_created}>
                        {[
                          month._id.created == _getYYYYMM() ?
                          '이번달'
                          : '저번달'
                        ]}
                      </Text>
                    </View>
                    <View style={[
                      styles.line,
                      month._id.created == _getYYYYMM() ?
                      { backgroundColor: '#FFE071' }
                      : {backgroundColor: '#FF6060'}
                    ]}/>
                  </View>
              ))}
            </View>
            
        </View>

        <View style={styles.lineBox}>
            <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 30}}>STATISTICS B</Text>
            <LineChart
            // style={styles.lineChart}
            data = {{
                labels: cates.map(cate => cate.category),
                datasets: [{
                    data: cates.map(cate => cate.cnt),
                    color: (opacity = 0.8) => `rgba(22, 148, 108, ${opacity})`, // optional
                    strokeWidth: 2 // optional
                }],
            }}
            
            width={Dimensions.get('window').width-100}
            height={320}
            yAxisInterval={1}
            chartConfig={{
                backgroundColor:'#fff',
                backgroundGradientFrom:"#fff",
                backgroundGradientTo:"#fff",
                fillShadowGradient: '#d4fbda',
                fillShadowGradientOpacity: 0.7,
                decimalPlaces:1,
                color:(opacity=1) => `rgba(255,0,0, ${opacity}})`,
                labelColor:(opacity=1) => `rgba(0,0,0, ${opacity}})`,
                propsForDots: {
                  r: "4",
                  strokeWidth: "2",
                  stroke: "#218838"
                },
                
            }}

            bezier
            style={{
              borderRadius: 20,
              flexDirection:'row',
              justifyContent: 'center',
            }} 
            
            />
        </View>

      </View>
    )
  }
}