import React, { Component } from "react";

class PlayAgain extends Component {
  render() {
    const { gameCompleted, choicesLeft } = this.props;
    if (gameCompleted || choicesLeft === 0) {
      return (
        <React.Fragment>
          <div className="row">
            <h3>Well Done!</h3>
          </div>
          <div className="row">
            <button onClick={this.props.onClick}>Play again!</button>
          </div>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}

export default PlayAgain;
