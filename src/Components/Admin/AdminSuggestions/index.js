import React from "react";
import MUIDataTable from "mui-datatables";
import { Button } from "@material-ui/core";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { withRouter, Link } from "react-router-dom";

import {
  getAllSuggestions,
  approveSuggestion,
  deleteSuggestion
} from "../../../actions/suggestion.actions";

class AdminSuggestions extends React.Component {
  componentWillMount() {
    this.props.getAllSuggestions();
  }

  approveSuggestion = id => {
    this.props.approveSuggestion(id);
  };

  deleteSuggestion = id => {
    console.log("delete", id);
    this.props.deleteSuggestion(id)
  };

  options = {
    filterType: "checkbox",
    responsive: "scroll"
  };
  columns = ["User", "Title", "Content", "ID", "Approve", "Delete"];

  render() {
    return (
      <div>
        <MUIDataTable
          title={"User Suggestions"}
          data={this.props.suggestions.map(item => {
            return [
              item.userName,
              item.title,
              item.content,
              <Link to={`/dashboard/suggestion/${item._id}`}>
                {item._id}
              </Link>,
              <Button
                variant="contained"
                color="primary"
                disabled={item.approved}
                key={item}
                onClick={() => this.approveSuggestion(item._id)}
              >
                Approve
              </Button>,
              <Button
                variant="contained"
                color="secondary"
                key={item}
                onClick={() => this.deleteSuggestion(item._id)}
              >
                Delete
              </Button>
            ];
          })}
          columns={this.columns}
          options={this.options}
        />
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
      approveSuggestion,
      deleteSuggestion
    },
    dispatch
  );

export default withRouter(connect(
  mapState,
  mapActions
)(AdminSuggestions));
