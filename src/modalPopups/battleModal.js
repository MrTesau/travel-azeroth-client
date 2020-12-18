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
import LogEntryForm from "../LogEntryForm.js";
import { mdiHome } from "@mdi/js";
import { mdiCommentOutline } from "@mdi/js";
import { mdiArrowLeftBold } from "@mdi/js";
import { mdiAlertCircle } from "@mdi/js";
import Icon from "@mdi/react";
// Responsive tools
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

export default function SimpleModal(props) {
  const {
    cardVid,
    battleCardImg,
    battleSounds,
    battleName,
    cardColor,
    battleBg,
    battleDescription,
    avatar_name,
    avatar_description,
    avatar_img,
    volume,
    comments,
    setComments,
  } = props;
  const [open, setOpen] = React.useState(false);
  const [displayComments, setDisplayComments] = React.useState(false);
  const audioRef = React.useRef(null);
  const playSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };
  const handleOpen = () => {
    if (volume) playSound();
    setOpen(true);
  };

  const handleClose = () => {
    audioRef.current.pause();
    setOpen(false);
  };
  const useStyles = makeStyles((theme) => ({
    rootMobile: {
      margin: "10px",
      width: "auto",
      maxWidth: "330px",
      background: cardColor,
    },
    media: {
      border: "none",
    },
    root: {
      maxWidth: "400px",
      background: cardColor,
    },
    paper: {
      position: "absolute",
      backgroundImage: `url(${battleBg})`,
      backgroundBlendMode: "multiply",
      backgroundSize: "cover",
      border: "1px solid #222426",
      boxShadow: "none",
      padding: "280px",
      paddingTop: "20px",
      paddingBottom: "20px",
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
  }));
  const classes = useStyles();
  const body = (
    <Grid
      container
      alignItems="center"
      justify="center"
      onClick={(event) => {
        event.preventDefault();
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
      className="location-grid-container"
    >
      <Hidden mdUp>
        <Card className={classes.rootMobile}>
          {!displayComments ? (
            <CardMedia
              className={`${classes.media} card-picture`}
              component={cardVid ? "iframe" : "img"}
              image={cardVid ? cardVid : battleCardImg}
              height="230"
            />
          ) : (
            ""
          )}
          <CardContent className="card-content">
            {!displayComments ? (
              <>
                {/* Standard Card */}
                <Typography
                  className="home-heading"
                  variant="subtitle1"
                  component="h6"
                >
                  {`${battleName}`}
                </Typography>
                <Typography
                  variant="body1"
                  color="primary"
                  component="p"
                  className="description-text"
                >
                  {battleDescription}
                </Typography>
                <Divider variant={"top"} className={classes.divider} />
                <div className="avatar-stories">
                  <PersonItem
                    name={avatar_name}
                    travelDescription={avatar_description}
                    src={avatar_img}
                    avatarSize={42}
                  />{" "}
                </div>
              </>
            ) : (
              <>
                {/* Comment Card */}
                {comments.map((comment) => {
                  return comment.city === battleName ? (
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
                  Fought at this battle? Or Just enjoying the journey? Leave a
                  comment!
                </Typography>
                <LogEntryForm city={battleName} setComments={setComments} />
              </>
            )}
          </CardContent>
          <CardActions style={{ background: cardColor }}>
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
              className="btn-comments"
              size="small"
              variant="contained"
              onClick={() => setDisplayComments(!displayComments)}
              style={{ fontSize: "0.5rem" }}
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
      </Hidden>
      {/* Larger Screens View */}
      <Hidden smDown>
        <Grid item md={11} className={classes.paper}>
          <Card className={classes.root}>
            <CardActionArea style={{ background: "white" }}>
              {!displayComments ? (
                <CardMedia
                  className={`${classes.media}`}
                  component={cardVid ? "iframe" : "img"}
                  image={cardVid ? cardVid : battleCardImg}
                  height="280"
                />
              ) : (
                ""
              )}
              <CardContent className="card-content">
                {!displayComments ? (
                  <>
                    <Typography gutterBottom variant="h6" component="h6">
                      {battleName}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      component="p"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {battleDescription}
                    </Typography>
                    <Divider variant={"top"} className={classes.divider} />
                    <PersonItem
                      name={avatar_name}
                      travelDescription={avatar_description}
                      src={avatar_img}
                    />
                  </>
                ) : (
                  <>
                    {comments.map((comment) => {
                      return comment.city === battleName ? (
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
                    <LogEntryForm city={battleName} setComments={setComments} />
                  </>
                )}
              </CardContent>
            </CardActionArea>
            <CardActions style={{ background: cardColor }}>
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
    </Grid>
  );

  return (
    <div>
      <audio ref={audioRef} src={battleSounds} style={{ display: "none" }} />
      <div onClick={handleOpen} onTouchEnd={handleOpen}>
        <Icon
          path={mdiAlertCircle}
          title={battleName}
          size={1}
          color="orange"
        />
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
