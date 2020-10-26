import React, { Component } from "react";

class Reset extends Component {
  render() {
    const gameCompleted = this.props.cityCharacters.every(
      (c) => c.guessed === true
    );
    if (gameCompleted) {
      return (
        <button className="btn btn-primary" onClick={this.props.onClick}>
          Play again!
        </button>
      );
    } else {
      return null;
    }
  }
}

export default Reset;
