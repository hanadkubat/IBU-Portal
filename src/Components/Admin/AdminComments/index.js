import React from "react";
import MUIDataTable from "mui-datatables";
import { Button } from "@material-ui/core";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  getAllComments,
  deleteComment
} from "../../../actions/comment.actions";

const columns = ["User", "Suggestion ID", "Comment", "Delete"];
const options = {
  filterType: "checkbox",
  responsive: "scroll"
};

class AdminComments extends React.Component {
  componentWillMount() {
    this.props.getAllComments();
  }

  render() {
    return (
      <div>
        <MUIDataTable
          title={"Komentari"}
          data={this.props.comments.map(c => {
            return [
              c.userName,
              c.suggestionId,
              c.content,
              <Button
                variant="contained"
                color="secondary"
                key={c._id}
                onClick={() => this.props.deleteComment(c._id)}
              >
                Delete
              </Button>
            ];
          })}
          columns={columns}
          options={options}
        />
      </div>
    );
  }
}

const mapState = state => ({
  comments: state.comments.comments
});
const mapActions = dispatch =>
  bindActionCreators(
    {
      getAllComments,
      deleteComment
    },
    dispatch
  );

export default connect(
  mapState,
  mapActions
)(AdminComments);
