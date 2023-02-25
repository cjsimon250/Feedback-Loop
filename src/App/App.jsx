import React from "react";
import axios from "axios";
import "./App.css";

import FeelingForm from "../FeelingForm";
import CommentsForm from "../CommentsForm/CommentsForm";
import SupportForm from "../SupportForm";
import UnderstandingForm from "../UnderstandingForm/UnderstandingForm";
import ReviewSubmissions from "../ReviewSubmissions";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      </div>
      <Route exact path="/">
        <FeelingForm />
      </Route>
      <Route exact path="/form">
        <Form />
      </Route>
      <Route exact path="/checkout">
        <Checkout />
      </Route>
      <Route exact path="/admin">
        <Admin />
      </Route>
    </Router>
  );
}

export default App;
