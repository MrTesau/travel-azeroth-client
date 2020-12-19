import { MapInteractionCSS } from "react-map-interaction";
import React from "react";
import currentBG from "./assets/map21.jpg";
import currentBG1 from "./assets/map3.jpg";
import SimpleModal from "./modalPopups/location_popup.js";
import BattleModal from "./modalPopups/battleModal.js";
import cities from "./modalPopups/locations.js";
import battlesArr from "./modalPopups/battles.js";
import { Hidden } from "@material-ui/core";
//import MiniMap from "../assets/miniMap.js";

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
  height: "145px",
  backgroundImage: `url(${currentBG1})`,
  backgroundBlendMode: "normal",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  position: "absolute",
  top: "76vh",
  left: "80vw",
  border: "1px solid grey",
  overflow: "hidden",
};
const miniMapView = {
  zIndex: 99,
  border: "1px solid red",
  width: "210px",
  height: "95px",
};

class MainMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { scale: 1.1, translation: { x: -30, y: -90 } },
    };
  }
  render() {
    const { scale, translation } = this.state.value;
    return (
      <>
        <div style={style}>
          <MapInteractionCSS
            value={this.state.value}
            onChange={(value) => this.setState({ value })}
            // defaultScale={1}
            //defaultTranslation={{ x: 0, y: 0 }}
            minScale={0.85}
            maxScale={2}
            showControls
          >
            <>
              <img className="main-map" src={currentBG} alt="Azeroth"></img>
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
              value={{
                scale: 1 / scale,
                translation: {
                  x: (translation.x * -1) / 10,
                  y: (translation.y * -1) / 10,
                },
              }}
            >
              <div style={miniMapView} />
            </MapInteractionCSS>
          </div>
        </Hidden>
      </>
    );
  }
}

export default MainMap;
