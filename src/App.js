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
// To Do: seperate API calls
const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:1337/api/logs"
    : "https://travel-log-hazel.vercel.app/api/logs";

const App = () => {
  const [scale, setScale] = React.useState(1);
  //const [translation, setTranslation] = React.useState({ x: 0, y: 0 });
  const [volume, setVolume] = React.useState(false);
  const [comments, setComments] = React.useState([]);
  const [value, setValue] = React.useState({
    scale: 1,
    translation: { x: 0, y: 0 },
  });
  //const [miniScale, setScale] = React.useState(160 - translation.y);
  //const [miniTranslation, setMiniTranslation] = React.useState({ x: 0, y: 0 });

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
  //const smallOffset = 5;
  const smallStyle = {
    zIndex: 90,
    width: "265px",
    height: "170px",
    backgroundImage: `url(${currentBG})`,
    backgroundBlendMode: "normal",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "absolute",
    top: "73vh",
    left: "80vw",
    border: "1px solid black",
  };
  React.useEffect(() => {
    axios.get(`${API_URL}`).then(function setRetrievedComments(res) {
      setComments([...res.data]);
    });
  }, []);

  // red sq is big map
  // minimap is wood desk
  // wrapper div is what red sq mini and big moving map move in

  /* setting image as bg: maybe static wrapper could contain it
   backgroundImage: 
      backgroundImage: `url(${currentBG})`,
              backgroundBlendMode: "multiply",
        
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",

          */

  return (
    <div className="desk-container">
      <Hidden smDown>
        <div style={smallStyle}>
          <MapInteractionCSS
            id="mini"
            //scale={scale}
            //translation={miniTranslation}

            defaultValue={{
              scale: 1,
              translation: { x: 2, y: 10 },
            }}
          >
            <div
              style={{
                // This is the moving peice
                zIndex: 99,
                border: "1px solid red",
                width: "185px",
                height: "70px",
              }}
            ></div>
          </MapInteractionCSS>
        </div>
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
          minScale={0.75}
          maxScale={window.innerWidth <= 600 ? 1.5 : 5} // find best scale bounds for mobiles
          showControls
          defaultValue={{
            scale: 1.15,
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
