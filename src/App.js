import React from "react";
import { MapInteractionCSS } from "react-map-interaction";
import SimpleModal from "./modalPopups/location_popup.js";
import BattleModal from "./modalPopups/battleModal.js";
import HomeModal from "./modalPopups/homeModal.js";
import cities from "./modalPopups/locations.js";
import battlesArr from "./modalPopups/battles.js";
import { mdiVolumeOff } from "@mdi/js";
import { mdiVolumeHigh } from "@mdi/js";
import Icon from "@mdi/react";
import { Button, Hidden } from "@material-ui/core";
import currentBG from "./assets/map2.jpg";
import "./App.css";
import axios from "axios";
import MiniMap from "./miniMap.js";
// To Do: seperate API calls
const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:1337/api/logs"
    : "https://travel-log-hazel.vercel.app/api/logs";

const App = () => {
  //const [scale, setScale] = React.useState(1);
  //const [translation, setTranslation] = React.useState({ x: 0, y: 0 });
  const [volume, setVolume] = React.useState(false);
  const [comments, setComments] = React.useState([]);
  //const [miniScale, setScale] = React.useState(160 - translation.y);
  //const [miniTranslation, setMiniTranslation] = React.useState({ x: 0, y: 0 });
  const [value, setValue] = React.useState({
    scale: 1,
    translation: { x: 0, y: 0 },
  });

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

  React.useEffect(() => {
    axios.get(`${API_URL}`).then(function setRetrievedComments(res) {
      setComments([...res.data]);
    });
  }, []);

  return (
    <div className="desk-container">
      <Hidden mdDown>
        <MiniMap {...value} />
      </Hidden>
      <div className="fixed-home-icon">
        <HomeModal volume={volume} setVolume={setVolume} />
      </div>
      <div className="fixed-volume-icon">
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={() => {
            setVolume(!volume);
          }}
        >
          {volume ? (
            <Icon
              path={mdiVolumeHigh}
              title="volume"
              size={0.8}
              color={"white"}
            />
          ) : (
            <Icon
              path={mdiVolumeOff}
              title="volume"
              size={0.8}
              color={"white"}
            />
          )}
        </Button>
      </div>
      <div style={style}>
        <MapInteractionCSS
          minScale={0.85}
          maxScale={1.1} //{window.innerWidth <= 600 ? 1.5 : 5} // find best scale bounds for mobiles
          showControls
          scale={value.scale}
          translation={value.translation}
          value={value}
          onChange={({ scale, translation }) => {
            setValue({ scale, translation });
          }}
          defaultValue={{
            scale: 1,
            translation: { x: -20, y: -100 },
          }}
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
                    volume={volume}
                    comments={comments}
                    setComments={setComments}
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
                  comments={comments}
                  setComments={setComments}
                  volume={volume}
                  {...battle}
                />
              </div>
            ))}
          </>
        </MapInteractionCSS>
      </div>
    </div>
  );
};

export default App;

/*
    <img
            style={{ width: "220px", border: "1px solid grey" }}
            src={currentBG}
            alt="Azeroth"
          ></img>
*/
