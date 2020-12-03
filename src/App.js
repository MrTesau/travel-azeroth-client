import React from "react";
//import { useState, useEffect } from "react";
import { MapInteractionCSS } from "react-map-interaction";
//import { listLogEntries } from "./API";
//import LogEntryForm from "./LogEntryForm";
import currentBG from "./azeroth1.jpg";
import "./App.css";
// City Modal
import SimpleModal from "./location_popup.js";
// Make Modal for battles eg wrathgate
// different layout, iframe of yt Wrathgate battle perhaps
import BattleModal from "./battleModal.js";

import HomeModal from "./homeModal.js";

// battle imports

import cities from "./locations.js";
import battlesArr from "./battles.js";

const wood_desk =
  "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

const App = () => {
  const [scale, setScale] = React.useState(1);
  const [translation, setTranslation] = React.useState({ x: 0, y: 0 });

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
      <div style={{ position: "fixed", left: 20, top: 20, zIndex: 99 }}>
        <HomeModal
        //..intro Modal and instructions, tech stack etc
        />
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
          minScale={0.95}
          maxScale={5}
          showControls
        >
          <div
            style={{
              backgroundImage: `url(${currentBG})`,
              backgroundBlendMode: "multiply",
              backgroundSize: "100% 125%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "60rem",
              width: "110rem",
              position: "relative",
              border: "1px solid grey",
              //padding: "100px",
              //margin: "-100px",
            }}
          >
            {/* To Do :
            Battle Styles/Colors
            Add Comments to Battles Modal
            Server Comments handling
            intro Card */}

            {cities.map((location) => {
              return (
                <div
                  style={{
                    position: "absolute",
                    left: `${location.left_pos}rem`,
                    top: `${location.top_pos}rem`,
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
                  />
                </div>
              );
            })}
            {/*extras: */}
            {/*battle za */}
            {/*Sunwell */}
            {/*Battle: ZA */}
            {/*Battle: path of the damned */}
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
