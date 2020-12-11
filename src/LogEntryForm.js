import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createLogEntry } from "./API";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:1337/api/logs"
    : "https://travel-log-hazel.vercel.app/api/logs";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

// OnSubmit attack a unique ID of modal comment came from
// pass in a prop.name from each modal

const LogEntryForm = (props) => {
  // Form input state
  const [commentForm, setCommentForm] = React.useState({
    city: props.city,
    name: "",
    comments: "",
  });
  const classes = useStyles();

  // Form Input HAndler
  const handleFormChange = (e) => {
    setCommentForm({
      ...commentForm,
      [e.target.name]: e.target.value,
    });
  };
  // Submit Form Comment to Server
  // Make new Get Request to recieve updated comments
  // setComments in App.js
  // Comments passed back to location_popup
  const postComment = (e) => {
    console.log(commentForm);
    e.preventDefault();
    axios
      .post(`${API_URL}`, { ...commentForm })
      .then(function postedComment(res) {
        // reset commentForm
        // setCommentForm({ city: props.city, name: "", comments:"" })
        // Call get again ( passed down from APP) to get new comment list
        /*
          axios.get(`${API_URL}`).then(function (res) {
            props.setComments(res);
          });
          */
      });
  };
  return (
    <form className={classes.root}>
      <TextField
        id="standard-basic"
        required
        label="Name"
        name="name"
        style={{ fontSize: "0.6rem" }}
        onChange={(e) => handleFormChange(e)}
      />
      <TextField
        style={{ fontSize: "0.6rem" }}
        id="standard-basic"
        required
        label="Comments"
        name="comments"
        onChange={(e) => handleFormChange(e)}
      />
      <br />
      <button
        onClick={(e) => {
          postComment(e);
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default LogEntryForm;

/*
    <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
      {error ? <h3 className="error">{error}</h3> : null}
      <label htmlFor="title">Name</label>
      <input name="title" required ref={register} />
    

      <label htmlFor="comments">Comments</label>
      <textarea name="comments" rows={2} ref={register}></textarea>

      <button disabled={loading}>{loading ? "Loading..." : "Submit"}</button>
    </form>
    */
