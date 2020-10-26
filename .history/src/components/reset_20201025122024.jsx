import React, { Component } from "react";

class Reset extends Component {
  state = {};
  render() {
    return (
      <button className="btn btn-primary" onClick={this.props.onClick}>
        Reset
      </button>
    );
  }
}

export default Reset;
