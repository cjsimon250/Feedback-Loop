import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

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
      <h1>How supported did you feel today?</h1>
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

export default SupportForm;
