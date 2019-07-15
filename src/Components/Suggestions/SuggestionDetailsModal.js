import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Button, useMediaQuery } from "@material-ui/core";

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
    }
  }));

export default function SimpleModal(props) {
  const classes = useStyles(useMediaQuery("(max-width:400px)"))();

  return (
    <Modal
      open={props.isOpen}
      onClose={() => props.handleClose("detailsModalOpen")}
      onEscapeKeyDown={() => props.handleClose("detailsModalOpen")}
    >
      <div className={classes.paper}>
        <h4 id="modal-title" className="text-center">
          Novi prijedlog
        </h4>
        
          
            <Button
              onClick={() => props.handleClose("detailsModalOpen")}
              variant="contained"
              size="small"
              className="mx-1"
            >
              Izlaz
            </Button>
      </div>
    </Modal>
  );
}
