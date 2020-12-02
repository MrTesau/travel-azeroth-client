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
import telcard from "./teldrassil/telcard.gif";
import tel1 from "./teldrassil/tel2.png";
//import tel2 from "./teldrassil/tel1.gif";
import telEntrance from "./teldrassil/tel.mp3";
// Travel Avatars
// thumbnails
import wooggy from "./Orgrimmar/woogy.gif";
import diablo from "./Orgrimmar/diablo.gif";

const App = () => {
  return (
    <div
      className="container"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
        backgroundSize: "cover",
        height: "101vh",
        width: "100%",
        //paddingTop: "50rem",
      }}
    >
      {/* This is going into a Map Component
      // reduce Map Zoomout
      // Remove Outer div
      // Limit scroll to page limits
      // or fucken leave it
      */}
      <div>
        <MapInteractionCSS showControls={false} minScale={0.5} maxScale={10}>
          <div
            style={{
              backgroundImage: `url(${currentBG})`,
              backgroundBlendMode: "multiply",
              backgroundSize: "75% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "50rem",
              width: "105rem",
            }}
          >
            <div style={{ position: "absolute", top: "24rem", left: "34rem" }}>
              <SimpleModal
                //Avatar Props
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

        {/* ^ ^ This is going into a Map Component */}
      </div>
    </div>
  );
};

export default App;
/*
 - Render mapGL
 - Retrieve points from API (logEntries)
 - Map points/logEntries with markers
 - add onClick to div rendered by markers, adds { id:Boolean } to showPopUp
 - Controls if popup box is shown
 
 

  // Adding new Point to db on dbl click
  // double click event contains location lat/long
  const showAddMarkerPopup = (event) => {
    console.log(event);
    const [longitude, latitude] = event.lngLat;
    setAddEntry({
      longitude,
      latitude,
    });
  };
   */

/*
    <ReactMapGL
      mapStyle="mapbox://styles/thecjreynolds/ck117fnjy0ff61cnsclwimyay"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      onDblClick={showAddMarkerPopup}
    >
     

      {logEntries.map(entry => (
      <>
        <Marker 
          key={entry._id}
          longitude={entry.longitude}
          latitude={entry.latitude}

          >
            <div
              onClick={() => {
                setPopup({
                 // ...showPopup,
                  [entry._id]: true
                });
              }}>
          <svg
            className="marker yellow"
            style={{
              // Dynamically set vw vh depending on zoom level
              // Neat!
              height: `${6 * viewport.zoom}px`,
              width: `${6 * viewport.zoom}px`,
            }}
             version="1.1" 
             id="Layer_1"
             x="0px" y="0px" 
             viewBox="0 0 512 512">
            <g>
              <g>
                <path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
                        c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
                        c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"/>
              </g>
            </g>
          </svg>
          </div>
        </Marker>
        {
          showPopup[entry._id] ? 
          <Popup
              dynamicPosition ={true}
              longitude={entry.longitude}
              latitude={entry.latitude}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setPopup({
                //...showPopup,
               // [entry._id]: false
              })}
              anchor="top" >
              <div className="popup">
                <h3>{entry.title}</h3>
                 <p>{entry.comments}</p>
                 <p>{entry.description}</p>
                 <img src={entry.image} alt=""></img>
                <small>Visited on: {new Date(entry.visitDate).toLocaleDateString()}</small>
              </div>
            </Popup>
             :
              null
            }
        </>
      )
     
      )}
    {
      addEntry ? (
        <>
          <Marker
            latitude={addEntry.latitude}
            longitude={addEntry.longitude}
          >
        <div>
              <svg
                className="marker red"
                style={{
                  height: `${6 * viewport.zoom}px`,
                  width: `${6 * viewport.zoom}px`,
                }}
                version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512">
                <g>
                  <g>
                    <path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
                      c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
                      c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"/>
                  </g>
                </g>
              </svg>
            </div>
          </Marker>
          <Popup
              dynamicPosition ={true}
              longitude={addEntry.longitude}
              latitude={addEntry.latitude}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setAddEntry(null)}
              anchor="top" >
              <div className="popup">
                <h3>Add Your New Log Entry</h3>
                <LogEntryForm 

                onClose={() => {
                setAddEntry(null);
                getEntries();

              }} location={addEntry} />
              </div>
            </Popup>
        </>
      ) :
      null
    }

    </ReactMapGL>
  */

/*
  // state to hold returned log entries
  const [logEntries, setLogEntries] = useState([]);
  const [addEntry, setAddEntry] = useState(null);
  const [showPopup, setPopup] = useState({});
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: -40.848461,
    longitude: 174.886,
    zoom: 4.5,
  });
  const [scale, setScale] = useState(1);

  const getEntries = async () => {
    const logEntries = await listLogEntries();
    setLogEntries(logEntries);
    console.log(logEntries);
  };

  // Trigger API call with useEffect
  useEffect(() => {
    getEntries();
  }, []);
*/
