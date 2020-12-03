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

import LogEntryForm from "./LogEntryForm.js";

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
export default function SimpleModal(props) {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [displayComments, setDisplayComments] = React.useState(false);
  //const [modalBG] = React.useState(example)[0];
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 440,
      // minHeight: "90% !important",
      background: props.cardColor,
    },
    paper: {
      position: "absolute",
      width: 900,
      backgroundImage: `url(${props.bg})`,
      backgroundBlendMode: "multiply",
      backgroundSize: "cover",
      border: "1px solid #222426",
      boxShadow: "none",
      padding: theme.spacing(1, 1, 1),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      outline: "none",
    },
    divider: {
      backgroundColor: "#d9e2ee",
      margin: "10px 10px",
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
      <img
        style={{ width: "25%", height: "40%", paddingRight: "20px" }}
        src={props.residentImage1}
        alt="Orc Clipart Frost - Orcs Must Die Orc@nicepng.com"
      ></img>
      <Card className={classes.root}>
        <CardActionArea>
          {!displayComments ? (
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="230"
              image={props.cityImage}
              title="City"
            />
          ) : (
            ""
          )}
          <CardContent style={{ background: "#fff1e0 " }}>
            {!displayComments ? (
              <>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.notCity
                    ? `${props.city}`
                    : `The City of ${props.city}`}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.cityDescription}
                </Typography>
                <Divider variant={"top"} className={classes.divider} />

                <PersonItem
                  name={props.avatarName}
                  travelDescription={props.avatarDescription}
                  src={props.avatarImg}
                />
                <Divider variant={"middle"} className={classes.divider} />
                <PersonItem
                  name={props.avatarName2}
                  travelDescription={props.avatarDescription2}
                  src={props.avatarImg2}
                />

                <Divider variant={"bottom"} className={classes.divider} />
              </>
            ) : (
              <>
                <PersonItem
                  name={"Anonymous"}
                  travelDescription={"Great City 10/10"}
                />
                <PersonItem
                  name={"Anonymous"}
                  travelDescription={"Great City 10/10"}
                />
                <PersonItem
                  name={"Anonymous"}
                  travelDescription={"Great City 10/10"}
                />
                <PersonItem
                  name={"Anonymous"}
                  travelDescription={"Great City 10/10"}
                />
                <Divider variant={"bottom"} className={classes.divider} />
                <Typography gutterBottom variant="subtitle2" component="h5">
                  Been to {props.city}? Or Just enjoying the journey? Leave a
                  comment!
                </Typography>

                <LogEntryForm />
              </>
            )}
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
            <span>&nbsp; Continue the Journey </span>
          </Button>
          <Button outlined onClick={() => setDisplayComments(!displayComments)}>
            {displayComments ? (
              <>
                <Icon
                  path={mdiMapMarker}
                  title="Orgrimmar"
                  size={1}
                  color={"black"}
                />
                <span>&nbsp; {`Back to ${props.city}`} </span>
              </>
            ) : (
              <>
                <Icon
                  path={mdiCommentOutline}
                  title="Orgrimmar"
                  size={1}
                  color={"black"}
                />
                <span>&nbsp; Comment </span>
              </>
            )}
          </Button>
        </CardActions>
      </Card>

      <img
        style={{ width: "25%", height: "40%", paddingLeft: "20px" }}
        src={props.residentImage2}
        alt="Orc Clipart Frost - Orcs Must Die Orc@nicepng.com"
      ></img>
    </div>
  );

  return (
    <div>
      <div onClick={handleOpen}>
        <Button variant="contained" size="small" color="primary">
          <Icon
            path={mdiHome}
            title={props.city}
            size={1}
            color={props.faction === "Horde" ? "red" : "white"}
          />
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
