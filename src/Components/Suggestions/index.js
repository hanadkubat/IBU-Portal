import React, { Component } from "react";
import { Grid, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import Suggestion from "./Suggestion";
import NewSuggestionModal from './NewSuggestionModal';

export default class Suggestions extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false
    }
  }

  //modal handlers
  handleOpen = () => {
    this.setState({modalOpen: true})
  };

  handleClose = () => {
    this.setState({modalOpen: false})
  };


  render() {
    return (
      <div>
        <NewSuggestionModal
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          isOpen={this.state.modalOpen} 
        />
      <Grid container spacing={3}>

        <Grid item xs={12} lg={4}>
          <Grid container justify="center">
            <Fab color="secondary" aria-label="Add" onClick={this.handleOpen}>
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

      </Grid>
      </div>
    );
  }
}
