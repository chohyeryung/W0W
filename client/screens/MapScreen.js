/* global kakao */
import React, { useEffect } from "react";
import styled from "styled-components";

import "react-native-gesture-handler";

const MapScreen = () => {
  useEffect(() => {
    const script = document.createElement("script");
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
      });
    };
  });

  return <MapScreens id="Map"></MapScreens>;
};

const MapScreens = styled.div`
  width: 100%;
  height: 100%;
`;

export default MapScreen;
