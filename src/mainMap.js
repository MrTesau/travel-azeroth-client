import { MapInteractionCSS } from "react-map-interaction";
import React from "react";
import currentBG from "./assets/map2.jpg";
import SimpleModal from "./modalPopups/location_popup.js";
import BattleModal from "./modalPopups/battleModal.js";
import cities from "./modalPopups/locations.js";
import battlesArr from "./modalPopups/battles.js";
import { Hidden } from "@material-ui/core";
//import MiniMap from "../assets/miniMap.js";

class MainMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { scale: 1.1, translation: { x: 0, y: 0 } },
    };
  }
  render() {
    const offset = 2;
    const style = {
      position: "absolute",
      top: offset,
      left: offset,
      right: offset,
      bottom: offset,
      width: `calc(100vw - ${2 * offset}px)`,
      height: `calc(100vh - ${2 * offset}px)`,
    };
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
      top: "74vh",
      left: "80vw",
      border: "1px solid black",
      overflow: "hidden",
    };
    const { scale, translation } = this.state.value;
    // Minimap conversions
    const minS = 1 / scale;
    const minT = { x: (translation.x * -1) / 10, y: (translation.y * -1) / 10 };
    const minV = { scale: minS, translation: minT };
    return (
      <>
        <div style={style}>
          <MapInteractionCSS
            scale={scale}
            translation={translation}
            value={this.state.value}
            onChange={(value) => this.setState({ value })}
            // defaultScale={1}
            //defaultTranslation={{ x: 0, y: 0 }}
            minScale={0.85}
            maxScale={2}
            showControls
          >
            <>
              <img
                style={{ width: "100rem" }}
                src={currentBG}
                alt="Azeroth"
              ></img>
              {cities.map((location) => {
                return (
                  <div
                    style={{
                      position: "absolute",
                      left: `${location.left_pos}rem`,
                      top: `${location.top_pos}rem`,
                      zIndex: 99,
                      cursor: "pointer",
                    }}
                  >
                    <SimpleModal
                      volume={this.props.volume}
                      comments={this.props.comments}
                      setComments={this.props.setComments}
                      {...location}
                    />
                  </div>
                );
              })}
              {battlesArr.map((battle) => (
                <div
                  style={{
                    position: "absolute",
                    top: `${battle.posTop}rem`,
                    left: `${battle.posLeft}rem`,
                    cursor: "pointer",
                  }}
                >
                  <BattleModal
                    comments={this.props.comments}
                    setComments={this.props.setComments}
                    volume={this.props.volume}
                    {...battle}
                  />
                </div>
              ))}
            </>
          </MapInteractionCSS>
        </div>
        <Hidden mdDown>
          <div style={smallStyle}>
            <MapInteractionCSS
              scale={minS}
              translation={minT}
              value={minV}
              onChange={(value) => this.setState({ value })}
            >
              <div
                style={{
                  zIndex: 99,
                  border: "1px solid red",
                  width: "210px",
                  height: "105px",
                }}
              />
            </MapInteractionCSS>
          </div>
        </Hidden>
      </>
    );
  }
}

export default MainMap;
