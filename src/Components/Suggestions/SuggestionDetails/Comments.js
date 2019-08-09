import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  Avatar,
  ListItemAvatar,
  Typography
} from "@material-ui/core";
import SuggestionCommentForm from '../SuggestionCommentForm';

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
        Komentari
      </Typography>
      <Divider variant="inset" component="li" />
      
      <SuggestionCommentForm 
        addComment={props.addComment}
      />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-3-512.png"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={"I'll be in your neighborhood doing errands this…"}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-3-512.png"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={"Wish I could come, but I'm out of town this…"}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-3-512.png"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={"Do you have Paris recommendations? Have you ever…"}
        />
      </ListItem>
    </List>
  );
}
