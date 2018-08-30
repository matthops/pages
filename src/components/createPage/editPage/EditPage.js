import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

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
  }
});

class EditPage extends Component {
  constructor() {
    super();

    this.state = {
      targetName: "",
      targetOrg: "",
      targetTitle: "",
      meetingDate: "",
      talkingPoints: ""
    };
  }

  updateTargetName(value) {
    this.setState({ targetName: value });
  }

  updateTargetOrg(value) {
    this.setState({ targetOrg: value });
  }
  updateTargetTitle(value) {
    this.setState({ targetTitle: value });
  }
  updateMeetingDate(value) {
    this.setState({ meetingDate: value });
  }
  updateTalkingPoints(value) {
    this.setState({ talkingPoints: value });
  }

  render() {
    const {
      targetName,
      targetOrg,
      targetTitle,
      meetingDate,
      talkingPoints
    } = this.state;

    const { classes } = this.props;

    return (
      <div>
        <h1>Create a new briefing page</h1>
        <form>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={targetName}
            onChange={e => this.updateTargetName(e.target.value)}
            margin="normal"
          />
          <TextField
            id="targetOrg"
            label="Organization"
            className={classes.textField}
            value={targetOrg}
            onChange={e => this.updateTargetOrg(e.target.value)}
            margin="normal"
          />
          <TextField
            id="targetTitle"
            label="Title"
            className={classes.textField}
            value={targetTitle}
            onChange={e => this.updateTargetTitle(e.target.value)}
            margin="normal"
          />
          <TextField
            id="meetingDate"
            label="Meeting date"
            className={classes.textField}
            value={meetingDate}
            onChange={e => this.updateMeetingDate(e.target.value)}
            margin="normal"
          />
          <TextField
            id="talkingPoints"
            label="Talking Points"
            className={classes.textField}
            value={talkingPoints}
            onChange={e => this.updateTalkingPoints(e.target.value)}
            margin="normal"
          />
        </form>
      </div>
    );
  }
}

CreatePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreatePage);
