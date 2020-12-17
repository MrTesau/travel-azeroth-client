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
// Character Rows
import PersonItem from "./orgimmarVisitors.js";
import Divider from "@material-ui/core/Divider";
// Icons
import { mdiMapMarker } from "@mdi/js";
import Icon from "@mdi/react";
import { mdiCommentOutline } from "@mdi/js";
import { mdiArrowLeftBold } from "@mdi/js";
import { mdiHome } from "@mdi/js";
import { mdiStar } from "@mdi/js";
// Comments Form
import LogEntryForm from "../LogEntryForm.js";
// Responsive tools
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

export default function SimpleModal(props) {
  const [open, setOpen] = React.useState(false);
  const [displayComments, setDisplayComments] = React.useState(false);
  const audioRef = React.useRef(null);
  const playSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };
  const useStyles = makeStyles(() => ({
    root: {
      maxWidth: "400px",
      background: props.cardColor,
    },
    rootMobile: {
      margin: "3px",
      width: "auto",
      maxWidth: "350px",
      background: props.cardColor,
    },
    paper: {
      position: "absolute",
      backgroundImage: `url(${props.bg})`,
      backgroundBlendMode: "multiply",
      backgroundSize: "cover",
      border: "1px solid #222426",
      boxShadow: "none",
      padding: "5px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      outline: "none",
    },
    divider: {
      backgroundColor: "#a8964d",
      margin: "10px 10px",
    },
    /*
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
    */
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
      onClick={(event) => {
        event.preventDefault();
        // Make sure user clicked on outer grid to close
        // otherwise clicking inner elements will close
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
      className="location-grid-container"
    >
      <Hidden mdUp>
        <Card className={classes.rootMobile}>
          <CardActionArea>
            {!displayComments ? (
              <CardMedia
                className="card-picture"
                component="img"
                alt="location"
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
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h6"
                    className="home-heading"
                  >
                    {props.city}&nbsp;
                    {props.rating.map(() => (
                      <Icon
                        path={mdiStar}
                        title={props.city}
                        size={0.5}
                        color={props.faction === "Horde" ? "red" : "blue"}
                      />
                    ))}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    component="p"
                    className="description-text"
                  >
                    {props.cityDescription}
                    <Divider variant={"top"} className={classes.divider} />
                    <div className="avatar-stories">
                      <PersonItem
                        name={props.avatarName}
                        travelDescription={props.avatarDescription}
                        src={props.avatarImg}
                        avatarSize={37}
                      />
                      <Divider variant={"middle"} className={classes.divider} />
                      <PersonItem
                        name={props.avatarName2}
                        travelDescription={props.avatarDescription2}
                        src={props.avatarImg2}
                        avatarSize={37}
                      />
                    </div>
                  </Typography>
                </>
              ) : (
                <>
                  {props.comments.map((comment) => {
                    return comment.city === props.city ? (
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
                  <Typography gutterBottom variant="subtitle2" component="h5">
                    Been to {props.city}? Or Just enjoying the journey? Leave a
                    comment!
                  </Typography>
                  <LogEntryForm
                    setComments={props.setComments}
                    city={props.city}
                  />
                </>
              )}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                setDisplayComments(false);
                handleClose();
              }}
              style={{
                fontSize: "0.6rem",
              }}
            >
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
              style={{
                fontSize: "0.6rem",
              }}
              variant="contained"
              size="small"
              onClick={() => setDisplayComments(!displayComments)}
            >
              {displayComments ? (
                <>
                  <Icon
                    path={mdiHome}
                    title="Orgrimmar"
                    size={0.5}
                    color={"black"}
                  />
                  <span>&nbsp; {`Back to ${props.city}`} </span>
                </>
              ) : (
                <>
                  <Icon
                    path={mdiCommentOutline}
                    title="Orgrimmar"
                    size={0.5}
                    color={"black"}
                  />
                  <span>&nbsp; Comment </span>
                </>
              )}
            </Button>
          </CardActions>
        </Card>
      </Hidden>
      <Hidden smDown>
        <Grid item md={9} className={`${classes.paper}`}>
          <img
            style={{ width: "20%", height: "33%", paddingRight: "10px" }}
            src={props.residentImage1}
            alt="Orc Clipart"
          ></img>
          <Card className={classes.root}>
            <CardActionArea>
              {!displayComments ? (
                <CardMedia
                  className="card-picture"
                  component="img"
                  alt="Contemplative Reptile"
                  height="240"
                  image={props.cityImage}
                  title="City"
                />
              ) : (
                ""
              )}
              <CardContent className="card-location">
                {!displayComments ? (
                  <>
                    <Typography gutterBottom variant="h5" component="h2">
                      {props.city}&nbsp;
                      {props.rating.map(() => (
                        <Icon
                          path={mdiStar}
                          title={props.city}
                          size={0.5}
                          color={props.faction === "Horde" ? "red" : "blue"}
                        />
                      ))}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
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
                    {props.comments.map((comment) => {
                      return comment.city === props.city ? (
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
                    <Typography gutterBottom variant="subtitle2" component="h5">
                      Been to {props.city}? Or Just enjoying the journey? Leave
                      a comment!
                    </Typography>
                    <LogEntryForm
                      setComments={props.setComments}
                      city={props.city}
                    />
                  </>
                )}
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                style={{
                  fontSize: "0.6rem",
                }}
                variant="contained"
                size="small"
                onClick={() => {
                  setDisplayComments(false);
                  handleClose();
                }}
              >
                <Icon
                  path={mdiArrowLeftBold}
                  title="Orgrimmar"
                  size={0.6}
                  color={"black"}
                />{" "}
                <span>&nbsp; Continue the Journey </span>
              </Button>
              <Button
                style={{
                  // filter: "brightness(135%)",
                  fontSize: "0.6rem",
                }}
                variant="contained"
                size="small"
                onClick={() => setDisplayComments(!displayComments)}
              >
                {displayComments ? (
                  <>
                    <Icon
                      path={mdiHome}
                      title="Orgrimmar"
                      size={0.6}
                      color={"black"}
                    />
                    <span>&nbsp; {`Back to ${props.city}`} </span>
                  </>
                ) : (
                  <>
                    <Icon
                      path={mdiCommentOutline}
                      title="Orgrimmar"
                      size={0.6}
                      color={"black"}
                    />
                    <span>&nbsp; Comment </span>
                  </>
                )}
              </Button>
            </CardActions>
          </Card>
          <img
            style={{ width: "20%", height: "33%", paddingLeft: "10px" }}
            src={props.residentImage2}
            alt="Orc Clipart"
          ></img>
        </Grid>
      </Hidden>
    </Grid>
  );
  return (
    <div>
      <audio
        ref={audioRef}
        src={props.citySounds}
        style={{ display: "none" }}
      />
      <div onClick={handleOpen} onTouchEnd={handleOpen}>
        <Icon
          path={mdiMapMarker}
          title={props.city}
          size={1.5}
          color={props.faction === "Horde" ? "red" : "blue"}
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

// getModalStyle is not a pure function, we roll the style only on the first render
//const [modalStyle] = React.useState(getModalStyle);

// Comments:
// Load Modal
// Request Server
// filter out comments not related to Modal
// Limit number of comments displayed -> newest 2 on mobile, newest 3 on desktop (for size concerns)(map to state, then grab the last 2 entries in array)
// API calls:
// https://www.youtube.com/watch?v=RnKSA-51kpI&ab_channel=NorthClarian  at roughly 33mins

/* Old Non-responsive Modal 

 const body = (
    <div style={modalStyle} className={classes.paper}>
      <img
        style={{ width: "25%", height: "38%", paddingRight: "15px" }}
        src={props.residentImage1}
        alt="Orc Clipart"
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
                    : `The City of ${props.city}`}{" "}
                  {props.rating.map(() => (
                    <Icon
                      path={mdiStar}
                      title={props.city}
                      size={0.5}
                      color={props.faction === "Horde" ? "red" : "blue"}
                    />
                  ))}
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

                <LogEntryForm
                //..pass a unique modal identifier to each form
                // submit identifier with form to db
                // use this to filter API response comments for each Modal
                />
              </>
            )}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
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
          <Button
            variant="contained"
            onClick={() => setDisplayComments(!displayComments)}
          >
            {displayComments ? (
              <>
                <Icon
                  path={mdiHome}
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
        style={{ width: "25%", height: "38%", paddingLeft: "15px" }}
        src={props.residentImage2}
        alt="Orc Clipart"
      ></img>
    </div>
  );
  */
