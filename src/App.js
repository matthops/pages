import React, { Component } from "react";
import logo from "./logo.svg";
import { withRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

import routes from "./routes";
import { Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
