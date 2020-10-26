import React, { Component } from "react";

class PlayAgain extends Component {
  render() {
    const { gameCompleted } = this.props;
    if (gameCompleted) {
      return (
        <React.Fragment>
          <h3>Well Done! </h3>
          <button onClick={this.props.onClick}>Play again!</button>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}

export default PlayAgain;
