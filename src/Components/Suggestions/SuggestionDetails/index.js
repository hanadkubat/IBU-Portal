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
              commentsList={this.state.comments}
            />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(SuggestionDetails);
