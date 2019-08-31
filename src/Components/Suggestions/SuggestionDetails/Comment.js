import React, { Fragment, useState } from "react";
import {
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar
} from "@material-ui/core";

import {signedInUser} from '../../../api';

export default function Comment(props) {

  const[imgSrc, setImgSrc] = useState("https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-3-512.png");

  signedInUser.getUserPhoto(props.userId).then(d => console.log(d, props.userId));

  return (
    <Fragment>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src={imgSrc}
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
