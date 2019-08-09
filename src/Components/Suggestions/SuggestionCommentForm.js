import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export default function SuggestionCommentForm(props) {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleChange = event => {
    setContent(event.target.value);
    setError("");
  };

  const submitForm = event => {
    event.preventDefault();
    if (content.length < 10) setError("Comment must be at least 10 words long");
    else {
      props.addComment(content);
      setContent("");
    }
  };

  return (
    <form onSubmit={submitForm}>
      <TextField
        id="outlined-name"
        label="Comment here"
        value={content}
        onChange={handleChange}
        fullWidth
        margin="normal"
        variant="outlined"
        error={error.length !== 0}
        helperText={error}
      />
    </form>
  );
}
