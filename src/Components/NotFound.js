import React from "react";
import {Grid, Paper, Typography}from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

export default function NotFound() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Stranica nije pronadjena
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
