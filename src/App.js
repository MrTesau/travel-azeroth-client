import React from "react";
import { MapInteractionCSS } from "react-map-interaction";
//import { listLogEntries } from "./API";
//import LogEntryForm from "./LogEntryForm";
// City Modal
import SimpleModal from "./location_popup.js";
import BattleModal from "./battleModal.js";
import HomeModal from "./homeModal.js";
// Location data imports
import cities from "./locations.js";
import battlesArr from "./battles.js";
// Icons
import { mdiVolumeOff } from "@mdi/js";
import { mdiVolumeHigh } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "@material-ui/core";
// Assets/styles
import wood_desk from "./wood.jpg";
import currentBG from "./azeroth1.jpg";
import "./App.css";

/*     
To Do :
Mobile responsive -> after Portfolio preview section
Server Comments handling
Play with pan/translate map options for better layout

*/
const App = () => {
  const [scale, setScale] = React.useState(1);
  const [translation, setTranslation] = React.useState({ x: 0, y: 0 });
  const [volume, setVolume] = React.useState(true);
  const offset = 1;
  const style = {
    position: "absolute",
    top: offset,
    left: offset,
    width: `calc(100vw - ${offset}px)`,
    height: `calc(100vh - ${offset}px)`,
    //border: "1px solid blue",
  };
  // Outer wood bg div -> custom added
  // inner wrapper div -> style object
  // MapInteractionCss
  // div with bg as map, pointers rendered here
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${wood_desk})`,
        backgroundSize: "cover",
      }}
    >
      <div style={{ position: "fixed", left: 20, top: 45, zIndex: 99 }}>
        <HomeModal
          bg={wood_desk}
          volume={volume}
          disableScrollLock={true}
          setVolume={setVolume}
        />
      </div>
      <div style={{ position: "fixed", left: 20, top: 80, zIndex: 99 }}>
        <Button
          //variant="default"
          variant="contained"
          size="small"
          color="primary"
          onClick={() => {
            setVolume(!volume);
            // audio.muted = true;
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
          defaultScale={1}
          defaultTranslation={{ x: 0, y: 0 }}
          minScale={0.5} // 0.95 desktop min
          maxScale={5}
          showControls
          /*
          translationBounds={{
            xMin: 0, xmin at normal -(map height* zoom)
            xMax: 1000, xmax at normal+(map height * zoom)(at 2X zoom you should be able to scroll 2x more)
            yMin: 0,
            yMax: 1000,
          }}
          */
          //disablePan={true}
        >
          <div
            style={{
              backgroundImage: `url(${currentBG})`,
              backgroundBlendMode: "multiply",
              backgroundSize: "100% 121%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "60rem",
              width: "110rem",
              position: "relative",
              border: "1px solid grey",
            }}
          >
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
