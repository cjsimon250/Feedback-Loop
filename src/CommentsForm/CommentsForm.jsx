import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

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
      <h1>Any comments you would like to make?</h1>

      <input
        type="text"
        placeholder="Comment"
        onChange={(evt) => {
          setComment(evt.target.value);
        }}
      ></input>
      <button onClick={handleSubmit}>Next</button>
    </>
  );
}

export default CommentsForm;
