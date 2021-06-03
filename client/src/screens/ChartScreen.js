import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
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
          { _id: { category: '종이빨대' }, category: '종이빨대', cnt: 0 },
          { _id: { category: '용기내' }, category: '용기내', cnt: 0 },
          { _id: { category: '쓰레기줍기' }, category: '쓰레기줍기', cnt: 0 },
          { _id: { category: '분리수거' }, category: '분리수거', cnt: 0 },
          { _id: { category: '대중교통' }, category: '대중교통', cnt: 0 },
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

        <View style={{
            marginTop:40}}>
            <LineChart
            style={styles.lineChart}
            data = {{
                labels: cates.map(cate => cate.category),
                datasets: [
                {
                    data: cates.map(cate => cate.cnt),
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
                    strokeWidth: 2 // optional
                },
                ],
            }}
            width={Dimensions.get('window').width}
            height={320}
            yAxisInterval={1}
            chartConfig={{
                backgroundColor:'#bdf8e4',
                backgroundGradientFrom:"#FFF",
                backgroundGradientTo:"#bdf8e4",
                decimalPlaces:1,
                color:(opacity=0) => `rgba(255,0,0, ${opacity}})`,
                labelColor:(opacity=0) => `rgba(0,0,0, ${opacity}})`,
            }}
            bezier />
        </View>

      </View>
    )
  }
}