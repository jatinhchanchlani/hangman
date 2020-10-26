import React, { Component } from "react";

class PlayAgain extends Component {
  render() {
    const { gameWon, gameLost } = this.props;
    if (gameWon || gameLost) {
      return (
        <React.Fragment>
          <h3>{this.getMessage(gameWon)}</h3>

          <div className="row">
            <button onClick={this.props.onClick}>Play again!</button>
          </div>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }

  getMessage(gameWon) {
    return gameWon ? "Well Done!" : "Ooops! Hard Luck :(";
  }
}

export default PlayAgain;
