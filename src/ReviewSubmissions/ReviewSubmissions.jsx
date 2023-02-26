import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import { useSelector } from "react-redux";

//all material ui components
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";

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
        <h3>Answers: </h3>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Feeling</TableCell>
              <TableCell align="center">Support</TableCell>
              <TableCell align="center">Understanding</TableCell>
              <TableCell align="center">Comments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{answers.feeling}</TableCell>
              <TableCell align="center">{answers.support}</TableCell>
              <TableCell align="center">{answers.understanding}</TableCell>
              <TableCell align="center">{answers.comments}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        size="small"
        onClick={handleSubmit}
        style={{ marginTop: 40 }}
      >
        Next
      </Button>
    </div>
  );
}

export default ReviewSubmissions;
