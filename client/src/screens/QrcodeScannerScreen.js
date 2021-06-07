import React, { Component } from 'react';
import {
  Alert,
  Linking,
  Dimensions,
  LayoutAnimation,
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class QrcodeScannerScreen extends Component {
  state = {
    hasCameraPermission: null,
    lastScannedUrl: null,
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = result => {
    if (result.data !== this.state.lastScannedUrl) {
      this.setState({ lastScannedUrl: result.data });

      Alert.alert(
        '5 포인트를 적립하시겠습니까?',
        this.state.lastScannedUrl,
        [
          {
            text: 'Yes',
            onPress: () => _handleSavePoint(this.state.lastScannedUrl),
          },
          { text: 'No', onPress: () => {} },
        ],
        { cancellable: false }
      );
  }

  _handleSavePoint = endpoint => {
      alert('하이')
  }
};

  render() {
    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission === null ? (
          <Text style={{ color: '#fff', fontSize: 30 }}>
          카메라 허용 권한을 불러오는 중
        </Text>
        ) : this.state.hasCameraPermission === false ? (
          <Text style={{ color: '#fff', fontSize: 30 }}>
            카메라 허용 권한이 거부되었습니다
          </Text>
        ) : (
          <View
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              alignItems: "center",
              justifyContent: "center",
              zIndex: 0,
            }}>
            <BarCodeScanner
              onBarCodeScanned={this._handleBarCodeRead}
              style={{
                flex: 1,
                height: '100%',
                width: '100%',
                position: 'absolute',
                zIndex: 1,
              }}
            />
            <Text
            style={{
                color: 'white',
                fontSize: 30,
                marginBottom:30,
                zIndex: 1,
            }}>
                QR 코드를 사각형 안에 맞춰주세요
            </Text>
            <View
            style={{
                borderColor: '#fff',
                borderWidth: 6,
                borderRadius: 20,
                zIndex: 2,
                width: '50%',
                height: '30%',
            }}/>
          </View>
        )}

        {this._maybeRenderUrl()}

        <StatusBar hidden />
      </View>
    );
  }

  _handlePressUrl = () => {
    Alert.alert(
      'Open this URL?',
      this.state.lastScannedUrl,
      [
        {
          text: 'Yes',
          onPress: () => Linking.openURL(this.state.lastScannedUrl),
        },
        { text: 'No', onPress: () => {} },
      ],
      { cancellable: false }
    );
  };

  _handlePressCancel = () => {
    this.setState({ lastScannedUrl: null });
  };

  _maybeRenderUrl = () => {
    if (!this.state.lastScannedUrl) {
      return;
    }

    // return (
    //   <View style={styles.bottomBar}>
    //     <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
    //       <Text numberOfLines={1} style={styles.urlText}>
    //         {this.state.lastScannedUrl}
    //       </Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       style={styles.cancelButton}
    //       onPress={this._handlePressCancel}>
    //       <Text style={styles.cancelButtonText}>Cancel</Text>
    //     </TouchableOpacity>
    //   </View>
    // );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    width: '100%',
    height: '100%'
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    flexDirection: 'row',
  },
  url: {
    flex: 1,
  },
  urlText: {
    color: '#fff',
    fontSize: 20,
  },
  cancelButton: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 18,
  },
});
