import React, { Component } from "react";
import { Grid, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import Suggestion from "./Suggestion";
import NewSuggestionModal from "./NewSuggestionModal";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  getAllSuggestions,
  addSuggestion,
  deleteSuggestion
} from "../../actions/suggestion.actions";

class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newModalOpen: false
    };
  }

  componentWillMount() {
    this.props.getAllSuggestions();
  }

  //modal handlers
  handleOpen = modal => {
    this.setState({ [modal]: true });
  };

  handleClose = modal => {
    this.setState({ [modal]: false });
  };



  render() {
    const areClosedSuggestions = this.props.match.path.indexOf('closed') !== -1;

    return (
      <div>
        <NewSuggestionModal
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          isOpen={this.state.newModalOpen}
          addSuggestionHandler={this.props.addSuggestion}
        />
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={4}>
            <Grid container justify="center">
              <Fab
                color="primary"
                aria-label="Add"
                onClick={() => this.handleOpen("newModalOpen")}
              >
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>

          {this.props.suggestions.filter(s =>{
              if(areClosedSuggestions && s.approved) {
                return !s.active;
              }
              if(!areClosedSuggestions && s.approved) {
                return s.active;
              }
              return false;
            }).map(s => {
            return (
              <Grid key={s._id} item xs={12} md={6} lg={4} >
                <Grid container justify="center">
                  <Suggestion
                    title={s.title}
                    content={s.content}
                    userId={s.userId}
                    id={s._id}
                    deleteSuggestion={() => this.props.deleteSuggestion(s._id)}
                  />
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

const mapState = state => ({
  suggestions: state.suggestions.suggestions
});
const mapActions = dispatch =>
  bindActionCreators(
    {
      getAllSuggestions,
      addSuggestion,
      deleteSuggestion
    },
    dispatch
  );

export default connect(
  mapState,
  mapActions
)(Suggestions);
