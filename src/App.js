import React, { Component } from "react";
import logo from "./logo.svg";
import { withRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import routes from "./routes";
import { Link } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4f5b62",
      main: "#263238",
      dark: "#000a12",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#5472d3",
      main: "#0d47a1",
      dark: "#002171",
      contrastText: "#ffffff"
    }
  }
});

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <CssBaseline>
            <Navbar />
            {routes}
          </CssBaseline>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(App);
