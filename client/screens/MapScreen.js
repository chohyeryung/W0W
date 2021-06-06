/* global kakao */
import React from "react";
import "react-native-gesture-handler";
import styled from "styled-components";

class MapScreen extends React.Component {
  async componentDidMount() {
    const script = await document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=a727a9ce6d84e20e9db8f890c59382d6&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      //   console.log("script.onload");
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
    return (
      <MapScreens
        id="Map"
        style={{ width: "100vw", height: "100vh" }}
      ></MapScreens>
    );
  }
}

const MapScreens = styled.div`
  width: 100%;
  height: 100%;
`;

export default MapScreen;
