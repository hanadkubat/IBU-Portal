import React from "react";
import MUIDataTable from "mui-datatables";
import { Button } from "@material-ui/core";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { withRouter, Link } from "react-router-dom";

import {
  getAllSuggestions,
  approveSuggestion,
  activateSuggestion,
  deleteSuggestion
} from "../../../actions/suggestion.actions";

class AdminSuggestions extends React.Component {
  componentWillMount() {
    this.props.getAllSuggestions();
  }

  approveSuggestion = id => {
    this.props.approveSuggestion(id);
  };

  activateSuggestion = (id, active) => {
    this.props.activateSuggestion(id, active);
  };

  deleteSuggestion = id => {
    console.log("delete", id);
    this.props.deleteSuggestion(id)
  };

  options = {
    filterType: "checkbox",
    responsive: "scroll",
    selectableRows: "none"
  };
  columns = ["User", "Title", "Content", "Approve", "Delete", "Active"];

  sortFunction = (a, b) => {
    if(a.approved && !b.approved){
      return 1;
    }
    if(!a.approved && b.approved){
      return -1;
    }
    return 0;
  }

  render() {
    return (
      <div>
        <MUIDataTable
          title={"User Suggestions"}
          data={this.props.suggestions.sort(this.sortFunction).map(item => {
            return [
              item.userName,
              <Link key={'link-' + item._id} to={`/dashboard/suggestion/${item._id}`}>
                {item.title}
              </Link>,
              item.content,
              <Button
                variant="contained"
                size="small"
                color="primary"
                disabled={item.approved}
                key={'app-btn-' + item._id}
                onClick={() => this.approveSuggestion(item._id)}
              >
                Approve
              </Button>,
              <Button
                variant="contained"
                color="secondary"
                size="small"
                key={'del-btn-' + item._id}
                onClick={() => this.deleteSuggestion(item._id)}
              >
                Delete
              </Button>,
              <Button
                variant="contained"
                color={item.active ? "secondary" : "primary"}
                size="small"
                key={'del-btn-' + item._id}
                onClick={() => this.activateSuggestion(item._id, item.active ? false : true)}
              >
                {item.active ? 'Make inactive' : 'Make active'}
              </Button>,
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
      activateSuggestion,
      deleteSuggestion
    },
    dispatch
  );

export default withRouter(connect(
  mapState,
  mapActions
)(AdminSuggestions));
