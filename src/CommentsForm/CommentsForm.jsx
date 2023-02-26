import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./CommentsForm.css";

//all material ui components
import { TextField, FormControl, Button } from "@mui/material";

function CommentsForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [comment, setComment] = useState("");

  //function to send input to reducer and route
  //user to the next form
  let handleSubmit = () => {
    dispatch({
      type: "ADD_COMMENTS",
      payload: comment,
    });

    history.push("/review");
  };
  return (
    <>
      <h3 id="question">Any comments you would like to make?</h3>
      <FormControl id="comments-form">
        <TextField
          style={{ width: 400 }}
          placeholder="Comment"
          onChange={(evt) => {
            setComment(evt.target.value);
          }}
        ></TextField>
        <Button variant="contained" size="small" onClick={handleSubmit}>
          Next
        </Button>
      </FormControl>
    </>
  );
}

export default CommentsForm;
