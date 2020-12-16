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
import PersonItem from "../orgimmarVisitors.js";
import Divider from "@material-ui/core/Divider";
// Comments Form
import LogEntryForm from "../LogEntryForm.js";
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

export default function SimpleModal(props) {
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [displayComments, setDisplayComments] = React.useState(false);
  //const [modalBG] = React.useState(example)[0];
  const audioRef = React.useRef(null);
  const playSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };
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

  const handleOpen = () => {
    if (props.volume) playSound();
    setOpen(true);
  };

  const handleClose = () => {
    audioRef.current.pause();
    setOpen(false);
  };

  const body = (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Hidden smDown>
        <Grid
          item
          md={7}
          lg={7}
          xl={7}
          className={classes.paper}
          style={{ padding: "100px" }}
        >
          <Card className={classes.root} style={{ width: "65%" }}>
            <CardActionArea style={{ background: "white" }}>
              {!displayComments ? (
                props.cardVid ? (
                  <>
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
                  </>
                ) : (
                  <>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="230"
                      image={props.battleImage}
                      title="City"
                    />
                  </>
                )
              ) : (
                ""
              )}
              <CardContent style={{ background: "#F8F9F9" }}>
                {!displayComments ? (
                  <>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h6"
                      // style={{ fontSize: "0.8rem" }}
                    >
                      {`${props.battleName}`}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {props.battleDescription}
                    </Typography>
                    <Divider variant={"top"} className={classes.divider} />
                    <PersonItem
                      name={props.avatarName}
                      travelDescription={props.avatarDescription}
                      src={props.avatarImg}
                    />
                  </>
                ) : (
                  <>
                    {props.comments.map((comment) => {
                      return comment.city === props.battleName ? (
                        <>
                          <PersonItem
                            name={comment.name}
                            travelDescription={comment.comments}
                          />
                        </>
                      ) : (
                        ""
                      );
                    })}
                    <Divider variant={"bottom"} className={classes.divider} />
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      component="p"
                      color="textPrimary"
                    >
                      Fought at this battle? Or Just enjoying the journey? Leave
                      a comment!
                    </Typography>
                    <LogEntryForm
                      city={props.battleName}
                      setComments={props.setComments}
                    />
                  </>
                )}
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
                {" "}
                {!displayComments ? (
                  <>
                    <Icon
                      path={mdiCommentOutline}
                      title="Orgrimmar"
                      size={0.7}
                      color={"black"}
                    />
                    <span>&nbsp; Comment </span>
                  </>
                ) : (
                  <>
                    <Icon
                      path={mdiHome}
                      title="Orgrimmar"
                      size={0.7}
                      color={"black"}
                    />
                    <span>&nbsp; {`Back `} </span>
                  </>
                )}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Hidden>
      {/* Small Screen Grid */}
      <Hidden mdUp>
        <Grid item xs={11} className={classes.paper}>
          <Card className={classes.root} style={{ width: "95%" }}>
            <CardActionArea style={{ background: "white" }}>
              {!displayComments ? (
                props.cardVid ? (
                  <>
                    <CardMedia className="card-picture">
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
                  </>
                ) : (
                  <>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="230"
                      image={props.battleImage}
                      title="City"
                    />
                  </>
                )
              ) : (
                ""
              )}
              <CardContent style={{ background: "#F8F9F9" }}>
                {!displayComments ? (
                  <>
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
                    />{" "}
                  </>
                ) : (
                  <>
                    {props.comments.map((comment) => {
                      return comment.city === props.battleName ? (
                        <>
                          <PersonItem
                            name={comment.name}
                            travelDescription={comment.comments}
                          />
                        </>
                      ) : (
                        ""
                      );
                    })}
                    <Divider variant={"bottom"} className={classes.divider} />
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      component="p"
                      color="textPrimary"
                    >
                      Fought at this battle? Or Just enjoying the journey? Leave
                      a comment!
                    </Typography>
                    <LogEntryForm
                      city={props.battleName}
                      setComments={props.setComments}
                    />
                  </>
                )}
              </CardContent>
            </CardActionArea>
            <CardActions style={{ background: props.cardColor }}>
              <Button
                size="small"
                variant="contained"
                onClick={() => handleClose()}
                style={{ fontSize: "0.5rem" }}
              >
                {" "}
                <Icon
                  path={mdiArrowLeftBold}
                  title="Orgrimmar"
                  size={0.5}
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
                {" "}
                {!displayComments ? (
                  <>
                    <Icon
                      path={mdiCommentOutline}
                      title="Orgrimmar"
                      size={0.6}
                      color={"black"}
                    />
                    <span>&nbsp; Comment </span>
                  </>
                ) : (
                  <>
                    <Icon
                      path={mdiHome}
                      title="Orgrimmar"
                      size={0.6}
                      color={"black"}
                    />
                    <span>&nbsp; {`Back `} </span>
                  </>
                )}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Hidden>
    </Grid>
  );

  return (
    <div>
      <audio
        ref={audioRef}
        src={props.battleSounds}
        style={{ display: "none" }}
      />
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

/*
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50; //+ rand();
  const left = 50; //+ rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
*/
