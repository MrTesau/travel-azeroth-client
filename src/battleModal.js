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
// Charater Rows
import PersonItem from "./orgimmarVisitors.js";
import Divider from "@material-ui/core/Divider";
// Comments Form
import LogEntryForm from "./LogEntryForm.js";
// Modal bg
// map marker Battle
import { mdiHome } from "@mdi/js";
import { mdiCommentOutline } from "@mdi/js";
import { mdiArrowLeftBold } from "@mdi/js";
import { mdiAlertCircle } from "@mdi/js";
import Icon from "@mdi/react";
// Responsive tools
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

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

// Create a generalized version with
// background
// Avatars
// description/name
// card color
// Video/iframe url

export default function SimpleModal(props) {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [displayComments, setDisplayComments] = React.useState(false);
  //const [modalBG] = React.useState(example)[0];
  const useStyles = makeStyles((theme) => ({
    root: {
      // maxWidth: 400,
      background: props.cardColor,
    },
    paper: {
      position: "absolute",
      // width: 850,
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

  const playSound = () => {
    let audio = new Audio(props.battleSounds);
    //audio.volume = 0.05;
    audio.play();
  };
  const handleOpen = () => {
    if (props.volume) playSound();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Grid
        item
        xs={11}
        md={4}
        /* style={{
          backgroundImage: `url(${paper})`,
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          padding: "10px",
        }}
        */

        className={classes.paper}
        // Need to add padding for larger screen sizes
      >
        {!displayComments ? (
          <Card className={classes.root}>
            <CardActionArea style={{ background: "white" }}>
              {props.cardVid ? (
                <>
                  <Hidden xsDown>
                    <CardMedia>
                      <iframe
                        title={props.battleName}
                        width="101%"
                        height="280"
                        src={props.cardVid}
                        frameborder="none"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </CardMedia>
                  </Hidden>
                  <Hidden mdUp>
                    <CardMedia>
                      <iframe
                        title={props.battleName}
                        width="100%"
                        height="180"
                        src={props.cardVid}
                        frameborder="none"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </CardMedia>
                  </Hidden>
                </>
              ) : (
                <>
                  <Hidden xsDown>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="230"
                      image={props.battleImage}
                      title="City"
                    />
                  </Hidden>
                  <Hidden mdUp>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="130"
                      image={props.battleImage}
                      title="City"
                    />
                  </Hidden>
                </>
              )}
              <CardContent style={{ background: "#F8F9F9" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  style={{ fontSize: "0.8rem" }}
                >
                  {`${props.battleName}`}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ fontSize: "0.7rem" }}
                >
                  {props.battleDescription}
                </Typography>
                <Divider variant={"top"} className={classes.divider} />
                <PersonItem
                  name={props.avatarName}
                  travelDescription={props.avatarDescription}
                  src={props.avatarImg}
                />
              </CardContent>
            </CardActionArea>
            <CardActions style={{ background: props.cardColor }}>
              <Button
                size="small"
                variant="contained"
                onClick={() => handleClose()}
                style={{ fontSize: "0.6rem" }}
              >
                {" "}
                <Icon
                  path={mdiArrowLeftBold}
                  title="Orgrimmar"
                  size={0.6}
                  color={"black"}
                />{" "}
                <span>&nbsp; Continue the Journey </span>
              </Button>
              <Button
                size="small"
                variant="contained"
                onClick={() => setDisplayComments(!displayComments)}
                style={{ fontSize: "0.6rem" }}
              >
                <>
                  <Icon
                    path={mdiCommentOutline}
                    title="Orgrimmar"
                    size={0.6}
                    color={"black"}
                  />
                  <span>&nbsp; Comment </span>
                </>
              </Button>
            </CardActions>
          </Card>
        ) : (
          <Card className={classes.root}>
            <CardActionArea style={{ background: "white" }}>
              <CardContent style={{ background: "#F8F9F9" }}>
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
                  Fought at this battle? Or Just enjoying the journey? Leave a
                  comment!
                </Typography>
                <LogEntryForm />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                variant="contained"
                onClick={() => handleClose()}
                style={{ fontSize: "0.7rem" }}
                size="small"
              >
                {" "}
                <Icon
                  path={mdiArrowLeftBold}
                  title="Orgrimmar"
                  size={0.6}
                  color={"black"}
                />{" "}
                <span>&nbsp; Continue the Journey </span>
              </Button>
              <Button
                size="small"
                style={{ fontSize: "0.7rem" }}
                variant="contained"
                onClick={() => setDisplayComments(!displayComments)}
              >
                <>
                  <Icon
                    path={mdiHome}
                    title="Orgrimmar"
                    size={0.6}
                    color={"black"}
                  />
                  <span>&nbsp; {`Back `} </span>
                </>
              </Button>
            </CardActions>
          </Card>
        )}
      </Grid>
    </Grid>
  );

  return (
    <div>
      <div onClick={handleOpen}>
        <Icon path={mdiAlertCircle} title="Orgrimmar" size={1.5} color="red" />
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
