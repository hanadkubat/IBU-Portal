import React from "react";
import { Grid, Paper, Typography, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CreateIcon from '@material-ui/icons/Create';
import moment from "moment";
import Comments from "./Comments";
import { suggestionsApi, commentsApi  } from "../../../api";
import {checkIfCurrentUser} from '../../../config/adalConfig';

import styles from "./SuggestionDetails.module.css";

const useStyles = theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  header: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    wordWrap: 'break-word'
  }
});

class SuggestionDetails extends React.Component {
  state = {
    userId: null,
    suggestionId: null,
    title: "",
    content: "",
    date: null,
    comments: [],
    isEditingTitle: false,
    isCurrentUser: false
  };

  componentWillMount() {
    suggestionsApi
      .getOne(this.props.match.params.id)
      .then(res => {
        this.setState({
          userId: res.userId,
          suggestionId: res._id,
          title: res.title,
          content: res.content,
          date: res.date,
          comments: res.comments,
          isCurrentUser: checkIfCurrentUser(res.userId)
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

  saveTitleEdit = e => {
    const newTitle = e.target.value;
    if(e.keyCode === 13){
      console.log('save title edit', newTitle)
      suggestionsApi.updateSuggestion(this.state.suggestionId, {title: newTitle})
        .then(data => {
          console.log(data)
          this.setState({isEditingTitle: false, title: newTitle})
        })
    }
  }

  render() {
    const { classes } = this.props;
    const title = this.state.title.length > 35 ? this.state.title.slice(0,35) + '...' : this.state.title

    return (
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} lg={8}>
          <Paper className={classes.root}>
            <div className={[classes.header, styles.no_overflow].join(' ')}>
              <Typography variant="h5" component="p" style={{ wordWrap: 'break-word' }}>
                {
                  this.state.isEditingTitle ?
                  <TextField
                    id="standard-full-width"
                    style={{ margin: 8 }}
                    helperText="Press enter to save"
                    fullWidth
                    margin="normal"
                    onBlur={() => this.setState({isEditingTitle: false})}
                    onKeyUp={this.saveTitleEdit}
                    defaultValue={this.state.title}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  /> :
                  title
                }
                {
                this.state.isCurrentUser && 
                !this.state.isEditingTitle &&
                <CreateIcon color="primary" style={{cursor:'pointer', margin: '0 10px'}}
                  onClick={ () => this.setState({isEditingTitle: true}) } 
                />
                } 
              </Typography>
              <Typography variant="caption" component="p">
                {moment(this.state.date).format("MMMM Do YYYY, h:mm a")}
              </Typography>
            </div>
            <Typography component="p" className="mt-4" style={{ wordWrap: 'break-word' }}>
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