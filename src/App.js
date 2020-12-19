import React from "react";
import HomeModal from "./modalPopups/homeModal.js";
import { mdiVolumeOff } from "@mdi/js";
import { mdiVolumeHigh } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "@material-ui/core";
import "./App.css";
import axios from "axios";
import MainMap from "./mainMap.js";
// To Do: seperate API calls
const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:1337/api/logs"
    : "https://travel-log-hazel.vercel.app/api/logs";

const App = () => {
  const [volume, setVolume] = React.useState(false);
  const [comments, setComments] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${API_URL}`).then(function setRetrievedComments(res) {
      setComments([...res.data]);
    });
  }, []);
  return (
    <div className="desk-container">
      <div className="fixed-home-icon">
        <HomeModal volume={volume} setVolume={setVolume} />
      </div>
      <MainMap volume={volume} comments={comments} setComments={setComments} />
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
import React, { Component } from "react";

// See ../copy-to-example.sh
import { MapInteractionCSS } from "react-map-interaction";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 1,
      translation: { x: 0, y: 0 },
    };
  }

  render() {
    // set container node at an origin other than client 0,0 to make sure we handle this case
    // import background and play with it here..when I have time
    const offset = 10;

    const style = {
      position: "absolute",
      top: offset,
      left: offset,
      width: `calc(100vw - ${offset}px)`,
      height: `calc(100vh - ${offset}px)`,
      border: "1px solid blue",
    };

    const { scale, translation } = this.state;
    return (
      <div style={style}>
        <MapInteractionCSS
          scale={scale}
          translation={translation}
          onChange={({ scale, translation }) =>
            this.setState({ scale, translation })
          }
          defaultScale={1}
          defaultTranslation={{ x: 0, y: 0 }}
          minScale={0.05}
          maxScale={5}
          showControls
        >
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 30, top: 30 }}>
              <button
                onClick={() => console.log("Click")}
                onTouchEnd={() => console.log("TouchEnd")}
                onTouchStart={() => console.log("TouchStart")}
              >
                Touch/Click Test
              </button>
            </div>
            <img src="/grid.png" style={{ pointerEvents: "none" }} alt="" />
          </div>
        </MapInteractionCSS>
      </div>
    );
  }
}

export default App;


<div style={style}>
        <MapInteractionCSS
          minScale={0.85}
          maxScale={1.3} //{window.innerWidth <= 600 ? 1.5 : 5} // find best scale bounds for mobiles
          showControls
          /*
          scale={value.scale}
          translation={value.translation}
          value={value}
          onChange={({ scale, translation }) => {
            setValue({ scale, translation });
          }}
          /*
          defaultValue={{
            scale: 1.15,
            translation: { x: -20, y: -100 },
          }}
          */
/*
        >
       
        </MapInteractionCSS>
      </div>
















*/
