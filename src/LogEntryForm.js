import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createLogEntry } from "./API";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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
// onsubmit add name to submit -> submit to server
// allows filtering from modal
const LogEntryForm = ({ location, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const classes = useStyles();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await createLogEntry(data);
      onClose();
    } catch (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      {error ? <h3 className="error">{error}</h3> : null}
      <TextField
        id="standard-basic"
        required
        label="Name"
        name="name"
        ref={register}
        style={{ fontSize: "0.6rem" }}
      />

      <TextField
        style={{ fontSize: "0.6rem" }}
        id="standard-basic"
        required
        label="Comments"
        name="name"
        ref={register}
      />

      <button disabled={loading}>{loading ? "Loading..." : "Submit"}</button>
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
