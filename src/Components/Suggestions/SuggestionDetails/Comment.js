import React, { Fragment } from "react";
import {
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar
} from "@material-ui/core";

export default function Comment(props) {
  return (
    <Fragment>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-3-512.png"
          />
        </ListItemAvatar>
        <ListItemText
          primary={props.userName}
          secondary={props.content}
        />
      </ListItem>
    </Fragment>
  );
}
