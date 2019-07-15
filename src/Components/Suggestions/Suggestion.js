import React from "react";
import { Typography, Paper, makeStyles } from "@material-ui/core";
import { Comment } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    cursor: 'pointer'
  }
}));

export default function Suggestion(props) {
  const classes = useStyles();

  return (
    <div onClick={() => props.modalHandler('detailsModalOpen')}>
      <Paper className={classes.root}>
        <Typography variant="h6" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
        <div className="mt-2">
          <span>
            <Comment /> 55
          </span>
        </div>
      </Paper>
    </div>
  );
}
