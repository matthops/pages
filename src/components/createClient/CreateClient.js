import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  },
  formContainer: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between"
  }
});

class CreateClient extends Component {
  constructor() {
    super();

    this.state = {
      clientName: ""
    };
    this.postNewClient = this.postNewClient.bind(this);
  }

  updateClientName(value) {
    this.setState({ clientName: value });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  //   updateTargetOrg(value) {
  //     this.setState({ targetOrg: value });
  //   }
  //   updateTargetTitle(value) {
  //     this.setState({ targetTitle: value });
  //   }
  //   updateMeetingDate(value) {
  //     this.setState({ meetingDate: value });
  //   }
  //   updateTalkingPoints(value) {
  //     this.setState({ talkingPoints: value });
  //   }

  postNewClient() {
    axios
      .post(`/api/clientname`, {
        clientName: this.state.clientName
      })
      .then(console.log("worked"));
  }

  render() {
    const { clientName } = this.state;

    const { classes } = this.props;

    return (
      <div>
        <form className={classes.formContainer}>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={clientName}
            onChange={e => this.updateClientName(e.target.value)}
            margin="normal"
          />
          <Button onClick={this.postNewClient}>Create</Button>
        </form>
      </div>
    );
  }
}

CreateClient.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateClient);
