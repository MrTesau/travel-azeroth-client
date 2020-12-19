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
