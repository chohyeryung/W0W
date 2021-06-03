import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Rect, Text as TextSVG, Svg } from "react-native-svg";

import axios from 'axios';
import { _getYYYYMM } from "../Fuction";

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
        thisMonths: [{total: 0, text: '이번달'}],
        prevMonths: [{total: 0, text: '지난달'}],
    }
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

  // componentDidMount() {
  //   axios.get('http://localhost:5000/mypage/statistics')
  //   .then(response => {
  //       datas: response.data.map( data =>
  //           {
  //               const { thisMonths,  prevMonths} = this.state;

  //               data._id.created == _getYYYYMM() ?
  //               this.setState({ 
  //                   thisMonths: thisMonths.map( month =>{
  //                       month.total = data.total 
  //               })})
  //               :  this.setState({ 
  //                   prevMonths: prevMonths.map( pmonth =>
  //                       pmonth.total = data.total 
  //               )})
  //           }
  //       )
  //   })  
  // }
  


  render() {
    const { cates, thisMonths, prevMonths } = this.state;
    console.log(thisMonths);

    return (
        <>
        <View>
            
        </View>

        <View style={{
            marginHorizontal:20,
            marginTop:40}}>
            <LineChart
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

        </>
    )
  }
}