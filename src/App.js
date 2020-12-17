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
import { Button } from "@material-ui/core";
import wood_desk from "./assets/wood.jpg";
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
  const [translation, setTranslation] = React.useState({ x: 0, y: 0 });
  const [volume, setVolume] = React.useState(false);
  const [comments, setComments] = React.useState([]);
  const offset = 2;
  const style = {
    //border: "1px solid grey",
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
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${wood_desk})`,
        backgroundSize: "cover",
      }}
    >
      <div className="fixed-home-icon">
        <HomeModal bg={wood_desk} volume={volume} setVolume={setVolume} />
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
          scale={scale}
          translation={translation}
          onChange={({ scale, translation }) => {
            setScale(scale);
            setTranslation(translation);
          }}
          minScale={0.75}
          maxScale={window.innerWidth <= 600 ? 1.5 : 5} // find best scale bounds for mobiles
          showControls
          defaultValue={{
            scale: 1.15,
            translation: { x: -20, y: -100 },
          }}
        >
          <div>
            <img style={{ width: "100rem" }} src={currentBG} alt=""></img>
            {cities.map((location) => {
              return (
                <div
                  style={{
                    position: "absolute",
                    left: `${location.left_pos}rem`,
                    top: `${location.top_pos}rem`,
                    zIndex: 99,
                  }}
                >
                  <SimpleModal
                    // comments
                    comments={comments}
                    setComments={setComments}
                    //Avatar Props
                    avatarName={location.avatar_name_1}
                    avatarDescription={location.avatar_description_1}
                    avatarImg={location.avatar_img_1}
                    avatarName2={location.avatar_name_2}
                    avatarDescription2={location.avatar_description_2}
                    avatarImg2={location.avatar_img_2}
                    // Faction and city
                    faction={location.faction}
                    city={location.city_name}
                    notCity={location.not_city}
                    bg={location.background_img}
                    citySounds={location.city_music}
                    cardColor={location.card_color}
                    cityDescription={location.description}
                    // Images
                    residentImage1={location.resident_img_1}
                    residentImage2={location.resident_img_2}
                    cityImage={location.card_header_img}
                    rating={location.rating}
                    volume={volume}
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
                }}
              >
                <BattleModal
                  // comments
                  comments={comments}
                  setComments={setComments}
                  cardVid={battle.cardVid}
                  battleImage={battle.battleCardImg}
                  battleSounds={battle.battleSounds}
                  battleName={battle.battleName}
                  cardColor={battle.cardColor}
                  bg={battle.battleBg}
                  battleDescription={battle.battleDescription}
                  avatarName={battle.avatar_name}
                  avatarDescription={battle.avatar_description}
                  avatarImg={battle.avatar_img}
                  volume={volume}
                />
              </div>
            ))}
          </div>
        </MapInteractionCSS>
      </div>
    </div>
  );
};

export default App;
