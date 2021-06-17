ad/* global kakao */
import React from "react";
import "react-native-gesture-handler";

class MapScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    width: 0,
    height: 0,
  };

  async componentDidMount() {
    this.setState = {
      width: "100%",
      height: "100%",
    };
    const script = await document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=a727a9ce6d84e20e9db8f890c59382d6&autoload=false";
    document.body.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("Map");
        let options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 7,
        };
        const map = new window.kakao.maps.Map(container, options);

        //마커가 표시 될 위치
        let markerPosition = new kakao.maps.LatLng(
          37.62197524055062,
          127.160175236755
        );

        // 마커를 생성
        let marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커를 지도 위에 표시
        marker.setMap(map);
      });
    };
  }
  render() {
    return <div id="Map" style={{ width: "100%", height: "100%" }}></div>;
  }
}

export default MapScreen;
