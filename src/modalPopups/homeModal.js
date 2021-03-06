import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
// import card components
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
// icons
import { mdiHome } from "@mdi/js";
import { mdiMapMarker } from "@mdi/js";
import Icon from "@mdi/react";
import { mdiArrowLeftBold } from "@mdi/js";
import { mdiStar } from "@mdi/js";
import { mdiVolumeOff } from "@mdi/js";
import { mdiVolumeHigh } from "@mdi/js";
import { mdiAlertCircle } from "@mdi/js";
import paper from "../assets/paper.jpg";
import greetings from "../assets/5.ogg";

export default function SimpleModal(props) {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(true); // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const useStyles = makeStyles((theme) => ({
    root: {
      background: "#FFD6AE",
    },
    paper: {
      backgroundImage: `url(${paper})`,
      backgroundBlendMode: "multiply",
      backgroundSize: "cover",
      borderRadius: "15px",
      border: "1px solid #222426",
      boxShadow: "none",
      padding: theme.spacing(1, 1, 1),
    },
    divider: {
      backgroundColor: "#a8964d",
      margin: "5px 5px",
    },
    text: {
      fontFamily: "Barlow, san-serif",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
    name: {
      fontWeight: 600,
      fontSize: "1rem",
      color: "#122740",
    },
    caption: {
      fontSize: "0.875rem",
      color: "#758392",
      marginTop: -4,
    },
  }));
  const classes = useStyles();
  const playAudio = () => {
    let audio = new Audio(greetings);
    audio.play();
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    if (props.volume) playAudio();
    setOpen(false);
  };
  const body = (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ width: "100vw", height: "100vh" }}
      onClick={(event) => {
        event.preventDefault();
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <Grid item xs={11} sm={10} md={8} lg={6} className={classes.paper}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent style={{ background: "#EEEADC" }}>
              <>
                <Typography
                  align="center"
                  variant="body1"
                  component="p"
                  className="home-heading"
                >
                  My Journey through Azeroth{" "}
                </Typography>

                <Divider variant={"top"} className={classes.divider} />
                <Typography
                  variant="caption"
                  display="block"
                  className="intro-text"
                >
                  Join me as I retrace my journey through azeroth and share why
                  I personally resonate with some of the wonderful locations
                  found here.
                  <br />
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  style={{
                    fontSize: "0.7rem",
                  }}
                  className="main-text"
                >
                  <br />I assigned the marked locations with{" "}
                  <Icon
                    path={mdiStar}
                    title="Orgrimmar"
                    size={0.5}
                    color={"red"}
                  />{" "}
                  icons rating them on my experience and how well they
                  translated the fantasy themes they portray. Included are
                  comments in the style of travel logs from my personal Warcraft
                  characters who's eyes I experienced the world through.
                  <Divider variant={"middle"} className={classes.divider} />
                  <Typography
                    align="center"
                    variant="caption"
                    display="block"
                    gutterBottom
                    style={{
                      fontSize: "0.7rem", // changed for mobile-> remove
                    }}
                    className="main-text"
                  >
                    <Icon
                      path={mdiMapMarker}
                      title={props.city}
                      size={1}
                      color={"red"}
                    />{" "}
                    Horde city/location of interest
                    <Icon
                      path={mdiMapMarker}
                      title={props.city}
                      size={1}
                      color={"blue"}
                    />{" "}
                    Alliance city/location of interest
                    <br />
                    <Icon
                      path={mdiAlertCircle}
                      title="Orgrimmar"
                      size={1}
                      color="red"
                    />{" "}
                    Battle/important lore locations of interest
                    <br />
                    <Hidden mdUp>
                      <Divider variant={"middle"} className={classes.divider} />
                    </Hidden>
                    Mousewheel or control buttons to zoom, click and drag to
                    navigate..Enjoy!
                  </Typography>
                  <Hidden smDown>
                    <Divider variant={"middle"} className={classes.divider} />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <strong>Technical Stuff</strong>
                    </div>
                    <strong>Front End:</strong> React, css, materialUI. The map
                    functionality was a particular challenge as common libraries
                    such as MapboxGL or Leaflet did not easily allow for
                    custom/fantasy images to substitute real world maps. I
                    finally landed on a solution in the form of
                    MapInteractionCSS, a custom library that allows the
                    transformation of regular elements into Map-like
                    functionality.
                    <br />
                    <strong>Back End:</strong> Node.js and MongoDb/Mongoose - A
                    basic server and database with CRUD (create Read Update
                    Delete) functionality.
                    <Divider variant={"middle"} className={classes.divider} />
                  </Hidden>
                  <Hidden smDown>
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      component="p"
                      style={{ fontSize: "8.5px" }}
                    >
                      FAIR USE NOTICE: This work is non-profit provide
                      commentary/educational critique on themes involving the
                      intellectual property of Activision Blizzard. This site
                      may contain copyrighted material the use of which has not
                      been specifically authorized by the owner. Such material
                      is made available for commentary and education. It is
                      believed this constitutes a 'fair use' of such copyrighted
                      material provided for in section 107 of the US Copyright
                      Law.
                      <br />
                      Info: http://www.law.cornell.edu/uscode/17/107.shtml
                      <br />
                      Any fan made art depicting Blizzard themes/intellectual
                      property displays their identyfying logos/signatures to
                      credit the artist.As all warcraft intellectual content is
                      under the ownership of Activision Blizzard to my knowledge
                      no specific permissions for these pieces are required. If
                      your art has been featured against your wishes email
                      mrtthewebd@gmail.com for its immediate removal.
                    </Typography>
                  </Hidden>
                </Typography>
              </>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              outlined
              size="small"
              variant="contained"
              color="primary"
              onClick={() => {
                handleClose();
              }}
              style={{
                fontSize: "0.7rem", // changed for mobile-> remove
              }}
            >
              <Icon
                path={mdiArrowLeftBold}
                title="Orgrimmar"
                size={0.6}
                color={"white"}
              />{" "}
              <span>&nbsp; Take me to Azeroth </span>
            </Button>
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={() => {
                props.setVolume(!props.volume);
              }}
              className="btn-comments"
            >
              {props.volume ? (
                <Icon
                  path={mdiVolumeHigh}
                  title="volume"
                  size={0.72}
                  color={"white"}
                />
              ) : (
                <Icon
                  path={mdiVolumeOff}
                  title="volume"
                  size={0.72}
                  color={"white"}
                />
              )}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );

  return (
    <div>
      <div onClick={handleOpen}>
        <Button variant="contained" size="small" color="primary">
          <Icon path={mdiHome} title={props.city} size={0.8} color={"white"} />
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        disableScrollLock
      >
        {body}
      </Modal>
    </div>
  );
}

/*
              Fair use:
              https://www.google.com/
              search?q=fair+use+is+any+copying+of+copyrighted+material+done+for+a+limited+and+%E2%80%9C
              transformative%E2%80%9D+purpose&oq=fair+use+is+any+copying+of+copyrighted
              +material+done+for+a+limited+and+%E2%80%9C
              transformative%E2%80%9D+purpose&aqs=chrome..69i57&sourceid=chrome&ie=UTF-8
               <img
                  className="cachet"
                  src="https://i.postimg.cc/4NBYNqCR/22.png"
                />
              */
