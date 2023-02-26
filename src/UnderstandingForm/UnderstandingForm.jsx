import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function UnderstandingForm() {
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
        type: "ADD_UNDERSTANDING",
        payload: Number(rating),
      });
      history.push("/support");
    }
  };
  return (
    <>
      <h1>How well did you understand today's material? </h1>
      <p>5: Awesome</p>
      <p>1: Not Great</p>
      <select
        onChange={(evt) => {
          setRating(evt.target.value);
        }}
      >
        <option value="">Please choose an option</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
      <button onClick={handleSubmit}>Next</button>
    </>
  );
}

export default UnderstandingForm;
