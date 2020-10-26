import React, { Component } from "react";

class Reset extends Component {
  render() {
    const gameCompleted = this.state.cityCharacters.every(
        (c) => c.guessed === true
      );
      if (gameCompleted) {
          return <button className="btn btn-primary" onClick={this.props.onClick}>
          Reset
        </button>
      }
      
    );
  }
}

export default Reset;
