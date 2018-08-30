import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import CreateClient from "../../components/createClient/CreateClient";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  icon: {
    margin: theme.spacing.unit * 2
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <p>Create Client</p>
        <Icon
          className={classes.icon}
          color="primary"
          onClick={this.handleOpen}
        >
          add_circle
        </Icon>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <CreateClient />
          </div>
        </Modal>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

const DashboardWrapped = withStyles(styles)(Dashboard);

export default DashboardWrapped;
