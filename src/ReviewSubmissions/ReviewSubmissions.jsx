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

    history.push("/submissionSuccess");
  }

  return (
    <div>
      <div>
        <h1>Answers </h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Feeling</th>
            <th>Support</th>
            <th>Understanding</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{answers.feeling}</td>
            <td>{answers.support}</td>
            <td>{answers.understanding}</td>
            <td>{answers.comments}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ReviewSubmissions;
