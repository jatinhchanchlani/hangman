import React, { Component } from "react";

class PlayAgain extends Component {
  render() {
    const { gameWon, gameLost } = this.props;
    if (gameWon || gameLost) {
      return (
        <React.Fragment>
          <div className="row">
            <h3>{this.getMessage(gameWon)}</h3>
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
