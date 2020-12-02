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
import gate from "./wrathgate/wrathgate.jpg";
// orgimmar resources
import durotarArt from "./Orgrimmar/durotar.jpg";
import orgSounds from "./Orgrimmar/org.mp3";
import orc2 from "./Orgrimmar/orc.png";
import orc1 from "./Orgrimmar/orc3.png";
import city from "./Orgrimmar/gates.gif";
// Thunderbluff Resources
import tbSounds from "./tb/thebluff.mp3";
import tauren1 from "./tb/t2.png";
import tauren2 from "./tb/tauren.png";
import tbbg from "./tb/tbbg.jpg";
import tb from "./tb/tbluff.gif";
// battle imports
import battleSound from "./wrathgate/wrath.mp3";
// Ashenvale
import forestbg from "./ashenvale/magic2.jpg";
//import forest from "./ashenvale/forestgif.gif";
import forest from "./ashenvale/magicAlt.jpg";
import nelf1 from "./ashenvale/n2.png";
import nelf2 from "./ashenvale/nelf.png";
import magicForest from "./ashenvale/magic.mp3";
// Stormmwind
import stormwindGates from "./stormwind/gates2.gif";
import stormwindBg from "./stormwind/stormwindBg.jpg";
import human from "./stormwind/human.gif";
import banner from "./stormwind/banner.png";
import entrance from "./stormwind/entrance.mp3";
// IronForge
import ironforgeBg from "./ironforge/ironforge.jpg";
import ironforgeInside from "./ironforge/ironforgeInside.jpg";
import dwarf2 from "./ironforge/dw2.png";
import dwarf1 from "./ironforge/dwarf.png";
import ironEntrance from "./ironforge/ironentrance.mp3";
// undercity
import undercityBg from "./undercity/undercitybg2.jpg";
import undercard from "./undercity/undercard.jpg";
import forsaken from "./undercity/sylv.png";
import forsaken2 from "./undercity/forasken2.gif";
import undercityEntrance from "./undercity/undercity.mp3";
//teldrassil
import telbg from "./teldrassil/telbg.png";
import telcard from "./teldrassil/telcard1.jpg";
import tel1 from "./teldrassil/tel2.png";
//import tel2 from "./teldrassil/tel1.gif";
import telEntrance from "./teldrassil/tel.mp3";
// Travel Avatars
// thumbnails
import wooggy from "./Orgrimmar/woogy.gif";
import diablo from "./Orgrimmar/diablo.gif";

import cities from "./locations.js";

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

  // Object with Modal props:
  // background image
  // card header image
  // music
  // residentimg1
  //residentimg2
  // comment section -> internal API request, filter other card responses => display comments
  // avatars of toons (name,image,description of visit)
  // location on page (wrapper div) {string : absolute, top: num, left: num}
  // notCity Boolean
  // cityName
  // card color -> hexstring
  // faction "Horde" : alliance

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${wood_desk})`,
        backgroundSize: "cover",
      }}
    >
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
          minScale={1}
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
            <div style={{ position: "absolute", left: 300, top: 30 }}>
              <SimpleModal
                // Intro/Helper Modal
                avatarName={"Wooggy"}
                avatarDescription={"Favourite Hangout"}
                avatarImg={wooggy}
                avatarName2={"Diablo Spawn"}
                avatarDescription2={"City of Birth"}
                avatarImg2={diablo}
                // Faction and city
                faction={"Horde"}
                city={"Orgrimmar"}
                bg={durotarArt}
                citySounds={orgSounds}
                cardColor={"#FFD6AE"}
                cityDescription={
                  " Orgimmar, The savage home of the orcs. The first major city I visited in Azeroth and one of my favorites."
                }
                // Images
                residentImage1={orc1}
                residentImage2={orc2}
                cityImage={city}
              />
            </div>
            <div
              style={{ position: "absolute", top: "24rem", left: "34rem" }}
            ></div>
            <div style={{ position: "absolute", top: "29rem", left: "26rem" }}>
              <SimpleModal
                //Avatar Props
                avatarName={"Wooggy"}
                avatarDescription={"City of Birth"}
                avatarImg={wooggy}
                avatarName2={"Diablo Spawn"}
                avatarDescription2={"Refuge from relentless Barrens Chat"}
                avatarImg2={diablo}
                // Faction / city
                faction={"Horde"}
                city={"Thunder Bluff"}
                bg={tbbg}
                citySounds={tbSounds}
                cardColor={"#ccffb3"}
                cityDescription={
                  "Thunder Bluff. High above the serene plaines of Mulgore lies this beautiful city. My all time favorite location in Azeroth"
                }
                // Images
                residentImage1={tauren1}
                residentImage2={tauren2}
                cityImage={tb}
              />
            </div>
            <div style={{ position: "absolute", top: "23rem", left: "28rem" }}>
              <SimpleModal
                //Avatar Props
                avatarName={"Wooggy"}
                avatarDescription={"City of Birth"}
                avatarImg={wooggy}
                avatarName2={"Diablo Spawn"}
                avatarDescription2={"Refuge from relentless Barrens Chat"}
                avatarImg2={diablo}
                notCity={true}
                city={"Ashenvale Forest"}
                bg={forestbg}
                citySounds={magicForest}
                cardColor={"#acccfb"}
                cityDescription={
                  "The magical forest of Ashenvale. Words cannot describe the wonder of entering the deep groves for the first time. A dangerous place for recent Horde Barrens graduates."
                }
                residentImage1={nelf1}
                residentImage2={nelf2}
                cityImage={forest}
              />
            </div>
            <div style={{ position: "absolute", top: "36rem", left: "73rem" }}>
              <SimpleModal
                //Avatar Props
                avatarName={"Wooggy"}
                avatarDescription={"City of Birth"}
                avatarImg={wooggy}
                avatarName2={"Diablo Spawn"}
                avatarDescription2={"Refuge from relentless Barrens Chat"}
                avatarImg2={diablo}
                notCity={false}
                city={"Stormwind"}
                bg={stormwindBg}
                citySounds={entrance}
                cardColor={"#324873"}
                cityDescription={
                  "The capital city of the Alliance. A Majestic city seated in the foothills above GoldShire. Deep feelings of awe greet you as you enter the gates."
                }
                residentImage1={human}
                residentImage2={banner}
                cityImage={stormwindGates}
              />
            </div>
            <div style={{ position: "absolute", top: "29rem", left: "75rem" }}>
              <SimpleModal
                //Avatar Props
                avatarName={"Wooggy"}
                avatarDescription={"City of Birth"}
                avatarImg={wooggy}
                avatarName2={"Diablo Spawn"}
                avatarDescription2={"Refuge from relentless Barrens Chat"}
                avatarImg2={diablo}
                notCity={false}
                city={"Ironforge"}
                bg={ironforgeBg}
                cardColor={"#DEB887"}
                cityDescription={
                  " The great capital of the Dwarves.Located deep beneath a mountain it was very visually appealing. During the Burning Crusade most high level players would loiter here to duel outside or in one of the glitched areas in the city."
                }
                residentImage1={dwarf1}
                residentImage2={dwarf2}
                cityImage={ironforgeInside}
                citySounds={ironEntrance}
              />
            </div>
            <div style={{ position: "absolute", top: "19rem", left: "73rem" }}>
              <SimpleModal
                //Avatar Props
                avatarName={"Wooggy"}
                avatarDescription={"City of Birth"}
                avatarImg={wooggy}
                avatarName2={"Diablo Spawn"}
                avatarDescription2={"Refuge from relentless Barrens Chat"}
                avatarImg2={diablo}
                faction={"Horde"}
                notCity={true}
                city={"The Undercity"}
                bg={undercityBg}
                cardColor={"#2F4F4F"}
                cityDescription={
                  "Deep under the ruins of Lordaeron lies the forsaken capital Undercity. Bizarre experiments and undead creatures found here bring less terror than getting stuck in a small tunnel as a Tauren."
                }
                residentImage2={forsaken}
                residentImage1={forsaken2}
                cityImage={undercard}
                citySounds={undercityEntrance}
              />
            </div>
            <div style={{ position: "absolute", top: "10rem", left: "21rem" }}>
              <SimpleModal
                //Avatar Props
                avatarName={"Wooggy"}
                avatarDescription={"City of Birth"}
                avatarImg={wooggy}
                avatarName2={"Diablo Spawn"}
                avatarDescription2={"Refuge from relentless Barrens Chat"}
                avatarImg2={diablo}
                notCity={true}
                city={"Teldrassil"}
                bg={telbg}
                cardColor={"#acccfb"}
                cityDescription={
                  "Teldrassil is an island and great tree off Kalimdor's northern coast.It was the home of the night elves and a stunning testament to the power of their magic."
                }
                residentImage1={tel1}
                residentImage2={tel1}
                cityImage={telcard}
                citySounds={telEntrance}
              />
            </div>
            {/*intro Card */}
            {/*crossroads Card */}
            {/*ratchet Card */}
            {/* Booty bay Card */}
            {/*battle stranglethorn arena Card */}
            {/*battle za */}
            {/*Sunwell */}
            {/*Battle: ZA */}
            {/*Battle: path of the damned */}
            {/*Strathholme */}
            {/*DK starting Zone */}
            {/*teldrassil */}
            {/*exodar */}
            {/*comment section styles */}
            <div style={{ position: "absolute", top: "8rem", left: "53rem" }}>
              <BattleModal
                city={"Battle Of the Wrathgate"}
                bg={gate}
                cardColor={"#FFE4C4"}
                cityDescription={
                  "The Infamous battle of the Wrathgate. Rest in Peace Highlord Bolvar and Saurfang the Younger"
                }
                cityImage={tb}
                citySounds={battleSound}
              />
            </div>
          </div>
        </MapInteractionCSS>
      </div>
    </div>
  );
};

export default App;
