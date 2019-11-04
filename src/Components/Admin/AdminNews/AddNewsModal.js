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

export default function AddNewsModal(props) {
  const classes = useStyles(useMediaQuery("(max-width:400px)"))();

  const [title, setTitle] = useState("");
  const [multiline, setMultiline] = useState("");
  const [image, setImage] = useState(null)

  const submitForm = event => {
    event.preventDefault();
    let formData = new FormData(event.target);
    props.addNews(formData);
    props.handleClose();
  };

  return (
    <Modal
      open={props.isOpen}
      onClose={props.handleClose}
      onEscapeKeyDown={props.handleClose}
    >
      <div className={classes.paper}>
        <h4 id="modal-title" className="text-center">
          Add News Article
        </h4>
        <form onSubmit={submitForm} className={classes.form} encType="multipart/form-data">
          <TextField
            required
            id="outlined-required"
            label="Title"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            helperText="enter news headline"
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Content"
            name="content"
            multiline
            required
            value={multiline}
            onChange={e => setMultiline(e.target.value)}
            margin="normal"
            helperText="enter news content"
            variant="outlined"
            rowsMax={7}
          />
          <Button
            variant="contained"
            component="label"
            className="my-2"
            color="primary"
          >
            Upload Headline Image
            <input
              name="headImage"
              accept="image/*"
              type="file"
              style={{ display: "none" }}
              onChange={e => setImage(e.target.files[0])}
            />
          </Button>
          <div className="mt-2 d-flex flex-wrap">
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              size="small"
              className="mx-1"
            >
              Add
            </Button>
            <Button
              onClick={props.handleClose}
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
