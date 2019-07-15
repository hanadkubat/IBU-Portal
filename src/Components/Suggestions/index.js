import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import Suggestion from "./Suggestion";

export default class Suggestions extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <Grid container justify="center">
              <Fab color="secondary" aria-label="Add">
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Grid container justify="center">
              <Suggestion />
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Grid container justify="center">
              <Suggestion />
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Grid container justify="center">
              <Suggestion />
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Grid container justify="center">
              <Suggestion />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
