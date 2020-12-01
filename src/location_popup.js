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

// thumbnails
import wooggy from "./Orgrimmar/woogy.gif";
import diablo from "./Orgrimmar/diablo.gif";

// Modal bg
// map marker city
import { mdiMapMarker } from "@mdi/js";
import Icon from "@mdi/react";

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
//props
// background image
// header image
// music
// comment section
// avatars of toons here
export default function SimpleModal(props) {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  //const [modalBG] = React.useState(example)[0];
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 370,
      background: props.cardColor,
    },
    paper: {
      position: "absolute",
      width: 750,
      backgroundImage: `url(${props.bg})`,
      backgroundBlendMode: "multiply",
      backgroundSize: "cover",
      border: "1px solid #222426",
      boxShadow: "none",
      padding: theme.spacing(2, 4, 3),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      outline: "none",
    },
    divider: {
      backgroundColor: "#d9e2ee",
      margin: "0 20px",
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
  const handleOpen = () => {
    let audio = new Audio(props.citySounds);
    //audio.volume = 0.05;
    audio.play();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Tab panel for Travel log/comments
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="270"
            image={props.cityImage}
            title="City"
            style={{ background: props.cardColor }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.notCity ? `${props.city}` : `The City of ${props.city}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.cityDescription}
            </Typography>
            <PersonItem
              name={"Woogy"}
              travelDescription={"Favourite Hangout"}
              src={wooggy}
            />
            <Divider variant={"middle"} className={classes.divider} />
            <PersonItem
              name={"Diablo Spawn"}
              travelDescription={"City of Birth"}
              src={diablo}
            />
            <Divider variant={"middle"} className={classes.divider} />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={() => handleClose()}>Continue the Journey</Button>
        </CardActions>
      </Card>
      <img
        style={{ maxWidth: "30%", maxHeight: "45%", paddingLeft: "25px" }}
        src={props.residentImage}
        alt="Orc Clipart Frost - Orcs Must Die Orc@nicepng.com"
      ></img>
    </div>
  );

  return (
    <div>
      <div onClick={handleOpen}>
        <Icon path={mdiMapMarker} title="Orgrimmar" size={1} color="red" />
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
