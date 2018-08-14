import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./App";
import Dashboard from "./components/dashboard/Dashboard";
import CreatePage from "./components/createPage/CreatePage";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/createpage" component={CreatePage} />
  </Switch>
);
