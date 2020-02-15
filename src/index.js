import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "./store";
import LoginPage from "./pages/LoginPage";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,

  document.getElementById("root")
);
