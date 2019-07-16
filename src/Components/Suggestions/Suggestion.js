import React from "react";
import { Typography, Paper, makeStyles } from "@material-ui/core";
import { Comment } from "@material-ui/icons";
import {withRouter} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    cursor: 'pointer'
  }
}));

function Suggestion(props) {
  const classes = useStyles();

  return (
    <div onClick={() => props.history.push('/dashboard/suggestion/23')}>
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

export default withRouter(Suggestion);