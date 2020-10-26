import React, { Component } from "react";

class OutputCharacters extends Component {
  render() {
    const { characters, gameWon, gameLost } = this.props;
    return (
      <React.Fragment>
        <br />
        {this.showLabel(gameWon, gameLost)}
        <h3>{characters.map((c) => this.getCharacter(c, gameLost))}</h3>
      </React.Fragment>
    );
  }

  getCharacter(character, gameLost) {
    const emptySpace = "  ";
    if (character.value === emptySpace) {
      return emptySpace;
    } else {
      if (character.guessed || gameLost) {
        return character.value.toUpperCase() + emptySpace;
      } else {
        return "__" + emptySpace;
      }
    }
  }

  showLabel(gameWon, gameLost) {
    if (gameWon || gameLost) {
      return null;
    } else {
      return <h4>Guess this Indian City</h4>;
    }
  }
}

export default OutputCharacters;
