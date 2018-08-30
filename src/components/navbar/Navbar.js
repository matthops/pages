import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

export default class NavBar extends Component {
  render() {
    return (
      <div className="theme">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Navbar
            </Typography>
            {/* <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              News
            </Typography> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
