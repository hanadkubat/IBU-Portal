import React, { Component } from "react";
import { Grid, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import Suggestion from "./Suggestion";
import NewSuggestionModal from './NewSuggestionModal';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getAllSuggestions } from '../../actions/suggestion.actions';
class Suggestions extends Component {
  constructor(props){
    super(props);
    this.state = {
      newModalOpen: false,
    }
  }

  componentWillMount() {
    this.props.getAllSuggestions()
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

const mapState = (state) => ({
  suggestions: state.suggestions.suggestions,
})
const mapActions = (dispatch) =>
  bindActionCreators(
      {
        getAllSuggestions,
      },
      dispatch
  )

export default connect(
  mapState,
  mapActions
)(Suggestions)