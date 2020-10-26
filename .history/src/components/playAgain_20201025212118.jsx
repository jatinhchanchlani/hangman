import React, { Component } from "react";

class PlayAgain extends Component {
  render() {
    const { gameWon, gameLost } = this.props;
    if (gameWon || gameLost) {
      return (
       <div className="alert alert-success" role="alert">
 <h3 className="alert-heading">{this.getMessage(gameWon)}</h3>
       </div>

         

          <p>
            <button
              className="btn btn-lg"
              style={{ backgroundColor: "#c9f0e2", outline: "none" }}
              onClick={this.props.onClick}
            >
              Play again!
            </button>
          </p>
       
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
