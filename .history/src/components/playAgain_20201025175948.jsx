import React, { Component } from "react";

class PlayAgain extends Component {
  render() {
    const { gameCompleted } = this.props;
    if (gameCompleted) {
      return (
        <button className="letter-button" onClick={this.props.onClick}>
          Play again!
        </button>
      );
    } else {
      return null;
    }
  }
}

export default PlayAgain;
