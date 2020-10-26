import React, { Component } from "react";

class OutputCharacters extends Component {
  render() {
    const { characters, gameLost } = this.props;
    console.log(characters);
    return (
      <React.Fragment>
        <br />
        <h4>Guess the Indian city name</h4>
        <h3>{characters.map((c) => this.getCharacter(c, gameLost))}</h3>
      </React.Fragment>
    );
  }

  getCharacter(character, gameLost) {
    const emptySpace = "        ";
    if (character.value === " ") {
      return emptySpace;
    } else {
      if (character.guessed || gameLost) {
        return character.value.toUpperCase() + emptySpace;
      } else {
        return "__" + emptySpace;
      }
    }
  }
}

export default OutputCharacters;
