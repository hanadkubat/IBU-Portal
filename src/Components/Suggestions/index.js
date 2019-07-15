import React, { Component } from "react";
import { Grid, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import Suggestion from "./Suggestion";
import NewSuggestionModal from './NewSuggestionModal';
import SuggestionDetailsModal from './SuggestionDetailsModal';

export default class Suggestions extends Component {
  constructor(props){
    super(props);
    this.state = {
      newModalOpen: false,
      detailsModalOpen: false
    }
  }

  //modal handlers
  handleOpen = (modal) => {
    this.setState({[modal]: true})
  };

  handleClose = (modal) => {
    this.setState({[modal]: false})
  };


  render() {
    return (
      <div>
        <NewSuggestionModal
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          isOpen={this.state.newModalOpen} 
        />
        <SuggestionDetailsModal
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          isOpen={this.state.detailsModalOpen} 
        />
      <Grid container spacing={3} alignItems="center">

        <Grid item xs={12} lg={4}>
          <Grid container justify="center">
            <Fab color="secondary" aria-label="Add" onClick={() => this.handleOpen('newModalOpen')}>
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Grid container justify="center">
            <Suggestion modalHandler={this.handleOpen} />
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Grid container justify="center">
            <Suggestion modalHandler={this.handleOpen} />
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Grid container justify="center">
            <Suggestion modalHandler={this.handleOpen} />
          </Grid>
        </Grid>


      </Grid>
      </div>
    );
  }
}
