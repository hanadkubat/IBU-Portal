import React, { useState, Fragment } from "react";
import {
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import CloseIcon from '@material-ui/icons/Close';
import CreateIcon from '@material-ui/icons/Create';
import TextField from '@material-ui/core/TextField';
import {checkIfCurrentUser} from '../../../config/adalConfig';

import styles from './SuggestionDetails.module.css';

export default function Comment(props) {

  const [isEditing, startEdit] = useState(false)
  //const [content, setContent] = useState(props.content)
  const isCurrentUser = checkIfCurrentUser(props.userId)

  const saveCommentEdit = e => {
    const newContent = e.target.value;
    if(e.keyCode === 13){
      console.log('save comment')
      props.updateComment(props.commentId, newContent)
      //setContent(newContent);
      startEdit(false)
    }
  }

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
        {
          isEditing ? 
          <TextField
            id="standard-full-width"
            style={{ margin: 8 }}
            helperText="Press enter to save"
            fullWidth
            margin="normal"
            onBlur={() => startEdit(false)}
            onKeyUp={e => saveCommentEdit(e)}
            defaultValue={props.content}
            InputLabelProps={{
              shrink: true,
            }}
          /> : 
          <ListItemText
            primary={props.userName}
            secondary={props.content}
            style={{ wordWrap: 'break-word' }}
          />
        }
        {isCurrentUser && <CreateIcon color="primary" style={{cursor:'pointer'}} onClick={() => startEdit(true)} />} 
        {isCurrentUser && <CloseIcon color="secondary" style={{cursor:'pointer'}} onClick={props.deleteComment} />}       
      </ListItem>
    </Fragment>
  );
}
