import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, TextField, Button, useMediaQuery } from "@material-ui/core";

const useStyles = isPhone =>
  makeStyles(theme => ({
    paper: {
      position: "",
      width: isPhone ? "320px" : "400px",
      margin: "0 auto",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 4),
      outline: "none",
      marginTop: "20%"
    },
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }));

export default function NewSuggestionModal(props) {
  const classes = useStyles(useMediaQuery("(max-width:400px)"))();

  const [title, setTitle] = useState("");
  const [multiline, setMultiline] = useState("");

  const submitForm = event => {
    event.preventDefault();
    props.addSuggestionHandler(title, multiline)
    props.handleClose("newModalOpen")
  };

  return (
    <Modal
      open={props.isOpen}
      onClose={() => props.handleClose("newModalOpen")}
      onEscapeKeyDown={() => props.handleClose("newModalOpen")}
    >
      <div className={classes.paper}>
        <h4 id="modal-title" className="text-center">
          New Suggestion
        </h4>
        <form onSubmit={submitForm} className={classes.form}>
          <TextField
            required
            id="outlined-required"
            label="Naslov"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            helperText="upisite naslov prijedloga"
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Prijedlog"
            multiline
            required
            value={multiline}
            onChange={e => setMultiline(e.target.value)}
            margin="normal"
            helperText="upisite tekst prijedloga"
            variant="outlined"
          />
          <div className="mt-2 d-flex flex-wrap">
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              size="small"
              className="mx-1"
            >
              Submit
            </Button>
            <Button
              onClick={() => props.handleClose("newModalOpen")}
              variant="contained"
              size="small"
              className="mx-1"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
