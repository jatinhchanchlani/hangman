import React, { Component } from "react";

class PlayAgain extends Component {
  render() {
    const { gameCompleted } = this.props;
    if (gameCompleted) {
      return (
        <h3>Well Done! </h3>
      <button onClick={this.props.onClick}>Play again!</button>
        );
    } else {
      return null;
    }
  }
}

export default PlayAgain;
