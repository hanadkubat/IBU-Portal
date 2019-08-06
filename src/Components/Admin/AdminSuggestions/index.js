import React from "react";
import MUIDataTable from "mui-datatables";
import { Button } from "@material-ui/core";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getAllSuggestions, approveSuggestion } from "../../../actions/suggestion.actions";





class AdminSuggestions extends React.Component {

  componentWillMount(){
    this.props.getAllSuggestions();
  }

  approveSuggestion = (id) => {
    console.log('approve', id)
    this.props.approveSuggestion(id)
  }

  deleteSuggestion = (id) => {
    console.log('delete', id)
  }

  options = {
    filterType: "checkbox",
    responsive: "scroll"
  };
  columns = ["Ime", "Naslov", "Sadrzaj", "Prihvati", "Odbiji"]

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
              <Button variant="contained" color="primary" key={item} onClick={() => this.approveSuggestion(item._id)}>
                Odobri
              </Button>,
              <Button variant="contained" color="secondary" key={item} onClick={() => this.deleteSuggestion(item._id)}>
                Zabrani
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


const mapState = (state) => ({
  suggestions: state.suggestions.suggestions,
})
const mapActions = (dispatch) =>
  bindActionCreators(
      {
        getAllSuggestions,
        approveSuggestion
      },
      dispatch
  )

export default connect(
  mapState,
  mapActions
)(AdminSuggestions)