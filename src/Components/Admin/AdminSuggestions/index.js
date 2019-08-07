import React from "react";
import MUIDataTable from "mui-datatables";
import { Button } from "@material-ui/core";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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
  columns = ["Ime", "Naslov", "Sadrzaj", "Prihvati", "Obrisi"];

  render() {
    return (
      <div>
        <MUIDataTable
          title={"Korisnicki prijedlozi"}
          data={this.props.suggestions.map(item => {
            return [
              item.userName,
              item.title,
              item.content,
              <Button
                variant="contained"
                color="primary"
                disabled={item.approved}
                key={item}
                onClick={() => this.approveSuggestion(item._id)}
              >
                Odobri
              </Button>,
              <Button
                variant="contained"
                color="secondary"
                key={item}
                onClick={() => this.deleteSuggestion(item._id)}
              >
                Obrisi
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

export default connect(
  mapState,
  mapActions
)(AdminSuggestions);
