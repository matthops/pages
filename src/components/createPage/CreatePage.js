import React, { Component } from "react";

export default class CreatePage extends Component {
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
    return (
      <div>
        <h1>Create a new briefing page mother fathers</h1>
        <form>
          <input
            placeholder="Name"
            value={targetName}
            onChange={e => this.updateTargetName(e.target.value)}
          />
          <input
            placeholder="Organization"
            value={targetOrg}
            onChange={e => this.updateTargetOrg(e.target.value)}
          />
          <input
            placeholder="Title"
            value={targetTitle}
            onChange={e => this.updateTargetTitle(e.target.value)}
          />
          <input
            placeholder="Meeting date"
            value={meetingDate}
            onChange={e => this.updateMeetingDate(e.target.value)}
          />
          <input
            placeholder="Talking Points"
            value={talkingPoints}
            onChange={e => this.updateTalkingPoints(e.target.value)}
          />
        </form>
      </div>
    );
  }
}
