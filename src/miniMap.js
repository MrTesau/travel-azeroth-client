import React from "react";
import currentBG from "./assets/map2.jpg";

// Test implementation.. not the greatest way to do it
// Doesnt properly track large map movement..only KINDA follows it
// breaks on zoom

const MiniMap = ({ ...value }) => {
  //const smallOffset = 5;
  const smallStyle = {
    zIndex: 90,
    width: "250px",
    height: "150px",
    backgroundImage: `url(${currentBG})`,
    backgroundBlendMode: "normal",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "absolute",
    top: "73vh",
    left: "80vw",
    border: "1px solid black",
    overflow: "hidden",
  };
  return (
    <div style={smallStyle}>
      <div
        style={{
          // This is the moving square
          zIndex: 99999,
          border: "1px solid red",
          width:
            180 / Math.ceil(value.scale) > 50
              ? `${180 / Math.ceil(value.scale)}px`
              : "50px",
          height:
            75 / Math.ceil(value.scale) > 25
              ? `${75 / Math.ceil(value.scale)}px`
              : "25px",
          position: "absolute",
          top:
            (value.translation.y * -1) / 10 < 100
              ? `${(value.translation.y * -1) / 40}vh`
              : "90vh",
          left:
            (value.translation.x * -1) / 10 < 100
              ? `${(value.translation.x * -1) / 40}vw`
              : "90vw",
        }}
      />
    </div>
  );
};
export default MiniMap;
