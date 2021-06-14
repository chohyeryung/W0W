import React from "react";
import { WebView } from "react-native-webview";

class MapScreen extends React.Component {
  render() {
    return (
      <WebView source={{ uri: "http://tnsguds8646.dothome.co.kr/map/" }} />
    );
  }
}

export default MapScreen;
