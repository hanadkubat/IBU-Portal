import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  Divider,
  Typography
} from "@material-ui/core";
import SuggestionCommentForm from '../SuggestionCommentForm';
import Comment from './Comment';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginTop: "10%"
  },
  inline: {
    display: "inline"
  }
}));

export default function Comments(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Typography variant="overline" component="h3">
        Comments section
      </Typography>
      <Divider variant="inset" component="li" />
      
      <SuggestionCommentForm 
        addComment={props.addComment}
      />

      {
        props.commentsList.reverse().map(c => {
          return (
            <Comment 
              content={c.content}
              userName={c.userName}
              userId={c.userId}
              date={c.date}
            />
          )
        })
      }
    </List>
  );
}
