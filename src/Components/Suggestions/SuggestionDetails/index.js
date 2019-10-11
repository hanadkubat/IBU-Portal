import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import moment from "moment";
import Comments from "./Comments";
import { suggestionsApi } from "../../../api";
import { commentsApi } from "../../../api";

const useStyles = theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  header: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

class SuggestionDetails extends React.Component {
  state = {
    suggestionId: null,
    title: "",
    content: "",
    date: null,
    comments: []
  };

  componentWillMount() {
    suggestionsApi
      .getOne(this.props.match.params.id)
      .then(res => {
        this.setState({
          suggestionId: res._id,
          title: res.title,
          content: res.content,
          date: res.date,
          comments: res.comments
        });
      })
      .catch(err => console.log(err));
  }

  addComment = content => {
    commentsApi
      .addComment(content, this.state.suggestionId)
      .then(comment =>
        this.setState({ comments: [...this.state.comments, comment] })
      )
      .catch(err => console.log(err));
  };

  updateComment = (commentId, content) => {
    commentsApi
      .updateOne(commentId, content)
      .then(comment => {
        this.updateCommentsState(commentId, content);
      })
      .catch(err => console.log(err));
  };

  deleteComment = commentId => {
    commentsApi
      .deleteComment(commentId)
      .then(data => {
        console.log(data);
        this.updateCommentsState(commentId);
      })
      .catch(err => console.log(err));
  };

  updateCommentsState = (commentId, content) => {
    /*
    Update comment content in state or remove comment from state 
    if content param isn't provided
    */

    const comments = [...this.state.comments];
    const index = comments.findIndex(c => c._id === commentId);
    if (content) comments[index].content = content;
    else comments.splice(index, 1);
    this.setState({ comments });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} lg={8}>
          <Paper className={classes.root}>
            <div className={classes.header}>
              <Typography variant="h5" component="h3">
                {this.state.title}
              </Typography>
              <Typography variant="caption" component="p">
                {moment(this.state.date).format("MMMM Do YYYY, h:mm a")}
              </Typography>
            </div>
            <Typography component="p" className="mt-4">
              {this.state.content}
            </Typography>
            <Comments
              addComment={this.addComment}
              updateComment={this.updateComment}
              deleteComment={this.deleteComment}
              commentsList={this.state.comments}
            />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(SuggestionDetails);
