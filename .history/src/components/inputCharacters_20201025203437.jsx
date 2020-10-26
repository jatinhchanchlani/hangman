import React, { Component } from "react";
import "../css/letters.css";

class InputCharacters extends Component {
  render() {
    const { characters, gameCompleted } = this.props;
    console.log(gameCompleted);
    if (!gameCompleted) {
      return (
        <div className="row">
          {characters.map((character) => (
            <button
              key={character.value}
              className="letter-button"
              style={{ backgroundColor: this.getBackground(character) }}
              onClick={() => this.props.onClick(character)}
            >
              {character.value}
            </button>
          ))}
        </div>
      );
    } else {
      return null;
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
