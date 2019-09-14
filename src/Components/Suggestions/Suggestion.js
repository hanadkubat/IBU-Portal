import React from "react";
import { Typography, Paper, makeStyles } from "@material-ui/core";
import { Comment } from "@material-ui/icons";
import { withRouter } from "react-router-dom";
import styles from './Suggestion.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    cursor: "pointer",
    width: "auto !important" /*just to override your inline CSS */,
    left: 0,
    right: 0
  }
}));

function Suggestion(props) {
  const classes = useStyles();

  return (
    <div
      onClick={() => props.history.push(`/dashboard/suggestion/${props.id}`)}
      className={styles.wrapper}
    >
      <Paper className={classes.root}>
        <Typography variant="h6" component="h3">
          {props.title}
        </Typography>
        <Typography component="p" className={styles.no_overflow}>{props.content}</Typography>
        <div className="mt-2">
          <span>
            <Comment />
          </span>
        </div>
      </Paper>
    </div>
  );
}

export default withRouter(Suggestion);
