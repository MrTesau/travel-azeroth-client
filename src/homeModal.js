import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";

//import card
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import PersonItem from "./orgimmarVisitors.js";
import Divider from "@material-ui/core/Divider";

// Icons

import { mdiHome } from "@mdi/js";
import { mdiMapMarker } from "@mdi/js";
import Icon from "@mdi/react";
import { mdiCommentOutline } from "@mdi/js";
import { mdiArrowLeftBold } from "@mdi/js";
import { mdiStar } from "@mdi/js";

import { mdiAlertCircle } from "@mdi/js";
import LogEntryForm from "./LogEntryForm.js";
import paper from "./paper.jpg";
import tb1 from "./tb1.gif";
import greetings from "./5.ogg";
const wood_desk =
  "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
/*
function rand() {
  return Math.round(Math.random() * 20) - 10;
}
*/
function getModalStyle() {
  const top = 50; //+ rand();
  const left = 50; //+ rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

/* Mobile Responsive Modal
You can just add class/ID to your Modal and/or its child DOM, then use a normal CSS file, 
with @media declaration, and style your component responsively as you wish!
You can simply include that normal CSS file in your main index.html file.
*/

export default function SimpleModal(props) {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(true);
  const [displayComments, setDisplayComments] = React.useState(false);
  //const [modalBG] = React.useState(example)[0];
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "98%",
      // minHeight: "90% !important",
      background: "#FFD6AE", //props.cardColor,
    },
    paper: {
      position: "absolute",
      width: "35vw",
      backgroundImage: `url(${paper})`,
      backgroundBlendMode: "multiply",
      backgroundSize: "cover",
      borderRadius: "15px",
      border: "1px solid #222426",
      boxShadow: "none",
      padding: theme.spacing(2, 1, 2),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      outline: "none",
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

  // Tab panel for Travel log/comments
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent style={{ background: "#EEEADC" }}>
            <>
              <Typography align="center" variant="body1" component="h5">
                My Journey through Azeroth
              </Typography>
              <Divider variant={"top"} className={classes.divider} />
              <br />
              <Typography variant="caption" display="block" gutterBottom>
                Join me as I retrace my journey through azeroth and discuss why
                I personally resonate with some of the wonderful locations found
                here.
                <br />
                <strong>Background</strong> <br />
                This massive multiplayer online role playing game held me in its
                grasp from the ages of 15 to 21. Through great effort I finally
                left the world of Azeroth for good by the time I attended
                university. To this day I still love and miss this game.
                <br />I will be assigning the various marked locations with
                <Icon
                  path={mdiStar}
                  title="Orgrimmar"
                  size={0.5}
                  color={"red"}
                />
                icons rating them on my subjective experience and how well they
                translated the given fantasy culture they portray. Included will
                also be comments in the style of travel logs from my personal
                Warcraft characters from who's eyes I experienced the world.
                <Divider variant={"middle"} className={classes.divider} />
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
                Mousewheel or control buttons to zoom, click and drag to
                navigate..Enjoy!
                <Divider variant={"middle"} className={classes.divider} />
                <strong>Technical stuff</strong>
                <br />
                Front End: React, css, materialUI. The map functionality was a
                particular challenge as common libraries such as MapboxGL or
                Leaflet did not easily allow for custom/fantasy images to
                substitute real world maps. I finally landed on a solution in
                the form of MapInteractionCSS, a custom library that allows the
                transformation of regular elements into Map-like functionality.
                <br />
                Back End: Node.js and MongoDb/Mongoose - A basic full stack
                Application with CRUD (create Read Update Delete) functionality.
              </Typography>
              <Divider variant={"middle"} className={classes.divider} />
              <Typography
                gutterBottom
                variant="subtitle2"
                component="p"
                style={{ fontSize: "8.5px" }}
              >
                FAIR USE NOTICE: This work is non-profit and serves to provide
                commentary/educational critique on themes involving the
                intellectual property of Activision Blizzard. This site may
                contain copyrighted material the use of which has not been
                specifically authorized by the owner. Such material is made
                available for commentary and education. It is believed this
                constitutes a 'fair use' of such copyrighted material provided
                for in section 107 of the US Copyright Law. In accordance with
                Title 17 U.S.C. Section 107, this site's material is provided
                without profit for commentary/research/education.
                <br />
                Info: http://www.law.cornell.edu/uscode/17/107.shtml
                <br />
                Any fan made art depicting Blizzard themes/intellectual property
                displays their identyfying logos/signatures to credit the
                artist.As this art is under the sole ownership of Activision
                Blizzard to my knowledge no specific permissions are required.
              </Typography>
            </>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            outlined
            onClick={() => {
              setDisplayComments(false);
              handleClose();
            }}
          >
            <Icon
              path={mdiArrowLeftBold}
              title="Orgrimmar"
              size={1}
              color={"black"}
            />{" "}
            <span>&nbsp; Take me to Azeroth </span>
          </Button>
        </CardActions>
      </Card>
    </div>
  );

  return (
    <div>
      <div onClick={handleOpen}>
        <Button
          variant="default"
          variant="contained"
          size="small"
          color="primary"
        >
          <Icon path={mdiHome} title={props.city} size={0.8} color={"white"} />
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
