import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import { useSelector } from "react-redux";

function ReviewSubmissions() {
  const history = useHistory();

  let answers = useSelector((store) => store.responses);

  //function to handle submission to database & routing
  function handleSubmit() {
    axios
      .post("/submissions", answers)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        alert("error in handleSubmit", err);
      });

    history.push("/");
  }

  return (
    <div>
      <div>
        <h1>Review </h1>
      </div>

      <button
        onClick={() => {
          handleSubmit;
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default ReviewSubmissions;
