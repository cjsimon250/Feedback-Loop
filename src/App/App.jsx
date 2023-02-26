import React from "react";
import axios from "axios";
import "./App.css";

import { HashRouter as Router, Route, Link } from "react-router-dom";

import FeelingForm from "../FeelingForm/FeelingForm";
import CommentsForm from "../CommentsForm/CommentsForm";
import SupportForm from "../SupportForm/SupportForm";
import UnderstandingForm from "../UnderstandingForm/UnderstandingForm";
import ReviewSubmissions from "../ReviewSubmissions/ReviewSubmissions";
import SubmitSuccess from "../SubmitSucess/SubmitSuccess";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
        </header>
      </div>
      <Route exact path="/">
        <FeelingForm />
      </Route>
      <Route exact path="/understanding">
        <UnderstandingForm />
      </Route>
      <Route exact path="/support">
        <SupportForm />
      </Route>
      <Route exact path="/comments">
        <CommentsForm />
      </Route>
      <Route exact path="/review">
        <ReviewSubmissions />
      </Route>
      <Route exact path="/submissionSuccess">
        <SubmitSuccess />
      </Route>
    </Router>
  );
}

export default App;
