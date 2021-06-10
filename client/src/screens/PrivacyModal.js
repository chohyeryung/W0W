import React, { Component } from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default class PrivacyModal extends Component {
  render() {
    return (
      <View style={{ 
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent' }}>
        
        <View style={{ flex: 1 }}>
          <AntDesign name="closecircleo" size={24} color="black" />
        </View>
        <Text>개인정보동의</Text>
        <Text>
          제1조(개인정보의 처리 목적)
          ('https://blog.naver.com/julianneyi'이하 'W0W')은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는  경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.

          1. 홈페이지 회원가입 및 관리

          회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지 목적으로 개인정보를 처리합니다.
        </Text>
      </View>
    )
  }
}
