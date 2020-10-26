import React, { Component } from "react";
import "../css/letters.css";

class InputCharacters extends Component {
  render() {
    const { characters, gameWon, gameLost } = this.props;
    console.log(gameWon);
    if (gameWon || gameLost) {
      return null;
    } else {
      return characters.map((character) => (
        <button
          key={character.value}
          className="letter-button"
          style={{ backgroundColor: this.getBackground(character) }}
          onClick={() => this.props.onClick(character)}
        >
          {character.value}
        </button>
      ));
    }
  }

  getBackground(character) {
    if (character.canClick) {
      return "#c9f0e2";
    } else {
      return "Red";
    }
  }
}

export default InputCharacters;
