import React from "react";
import currentBG from "./assets/map2.jpg";
import { MapInteractionCSS } from "react-map-interaction";
// Test implementation.. not the greatest way to do it
// Doesnt properly track large map movement..only KINDA follows it
// breaks on zoom

const MiniMap = (props) => {
  //const smallOffset = 5;
  const smallStyle = {
    zIndex: 90,
    width: "240px",
    height: "140px",
    backgroundImage: `url(${currentBG})`,
    backgroundBlendMode: "normal",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "absolute",
    top: "77vh",
    left: "82vw",
    border: "1px solid black",
    overflow: "hidden",
  };
  return (
    <div style={smallStyle}>
      <MapInteractionCSS>
        <div
          style={{
            // This is the moving square
            zIndex: 99,
            border: "1px solid red",
            width: `${180 * (1 / props.scale)}px`,
            // 180 / Math.ceil(value.scale) > 50
            //  ? `${180 / Math.ceil(value.scale)}px`
            // : "50px",
            height: `${75 * (1 / props.scale)}px`,
            // 75 / Math.ceil(value.scale) > 25
            // ? `${75 / Math.ceil(value.scale)}px`
            //  : "25px",
            position: "absolute",
            top:
              (props.translation.y * -1) / 10 < 100
                ? `${(props.translation.y * -1) / 50}vh`
                : "90vh",
            left:
              (props.translation.x * -1) / 10 < 100
                ? `${(props.translation.x * -1) / 50}vw`
                : "90vw",
          }}
        />
      </MapInteractionCSS>
    </div>
  );
};
export default MiniMap;

/*
const MiniMap = ({ ...value }) => {
  //const smallOffset = 5;
  const smallStyle = {
    zIndex: 90,
    width: "220px",
    height: "140px",
    backgroundImage: `url(${currentBG})`,
    backgroundBlendMode: "normal",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "absolute",
    top: "77vh",
    left: "82vw",
    border: "1px solid black",
    overflow: "hidden",
  };
  return (
    <div style={smallStyle}>
      <div
        style={{
          // This is the moving square
          zIndex: 99,
          border: "1px solid red",
          width: `${180 * (1 / value.scale)}px`,
          // 180 / Math.ceil(value.scale) > 50
          //  ? `${180 / Math.ceil(value.scale)}px`
          // : "50px",
          height: `${75 * (1 / value.scale)}px`,
          // 75 / Math.ceil(value.scale) > 25
          // ? `${75 / Math.ceil(value.scale)}px`
          //  : "25px",
          position: "absolute",
          top:
            (value.translation.y * -1) / 10 < 100
              ? `${(value.translation.y * -1) / 50}vh`
              : "90vh",
          left:
            (value.translation.x * -1) / 10 < 100
              ? `${(value.translation.x * -1) / 50}vw`
              : "90vw",
        }}
      />
    </div>
  );
};
export default MiniMap;
*/
