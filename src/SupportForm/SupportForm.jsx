import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./SupportForm.css";

//all material ui components
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

function SupportForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [rating, setRating] = useState(0);

  //function to send input to reducer and route
  //user to the next form
  let handleSubmit = () => {
    if (rating === 0) {
      alert("Not a valid answer. Please try again.");
    } else {
      dispatch({
        type: "ADD_SUPPORT",
        payload: Number(rating),
      });
      history.push("/comments");
    }
  };
  return (
    <>
      <h3 id="question">How supported were you today?</h3>
      <div id="support-form">
        <p>5: Awesome</p>
        <p>1: Not Great</p>
        <FormControl
          id="support-input"
          style={{ width: 250, textAlign: "center" }}
        >
          <InputLabel>Supported</InputLabel>
          <Select
            labelId="support-select-label"
            id="support-select"
            defaultValue={0}
            variant="outlined"
            label="Supported"
            onChange={(evt) => {
              setRating(evt.target.value);
            }}
          >
            <MenuItem value="0">Please choose an option</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="1">1</MenuItem>
          </Select>
          <FormHelperText style={{ paddingBottom: 30 }}>
            Select a rating
          </FormHelperText>
          <Button variant="contained" size="small" onClick={handleSubmit}>
            Next
          </Button>
        </FormControl>
      </div>
    </>
  );
}

export default SupportForm;
