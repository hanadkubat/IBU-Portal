import React from "react";
import { Typography, Paper, makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { withRouter } from "react-router-dom";
import styles from "./Suggestion.module.css";
import { checkIfCurrentUser } from "../../config/adalConfig";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: "auto !important" /*just to override your inline CSS */,
    left: 0,
    right: 0
  },
  pointer: {
    cursor: "pointer"
  }
}));

function Suggestion(props) {
  const classes = useStyles();
  const isCurrentUser = checkIfCurrentUser(props.userId);

  const goToSuggestion = () =>
    props.history.push(`/dashboard/suggestion/${props.id}`);

  return (
    <div className={styles.wrapper}>
      <Paper className={classes.root}>
        <Typography
          className={classes.pointer}
          variant="h6"
          component="h3"
          onClick={goToSuggestion}
        >
          {props.title}
        </Typography>
        <Typography
          component="p"
          className={[styles.no_overflow, classes.pointer].join(" ")}
          onClick={goToSuggestion}
        >
          {props.content}
        </Typography>
        <div className="mt-2">
          <span>
            {isCurrentUser && (
              <CloseIcon
                className={classes.pointer}
                onClick={props.deleteSuggestion}
                color="secondary"
              />
            )}
          </span>
        </div>
      </Paper>
    </div>
  );
}

export default withRouter(Suggestion);
