import React, { Fragment } from "react";
import {
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export default function Comment(props) {

  return (
    <Fragment>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="User"
            style={{backgroundColor: red[500]}}
          >
            {props.userName[0]}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.userName}
          secondary={props.content}
        />
      </ListItem>
    </Fragment>
  );
}
