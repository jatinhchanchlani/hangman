import React, { Component } from "react";

class OutputCharacters extends Component {
  render() {
    const { characters, gameLost } = this.props;
    console.log(characters);
    return (
      <React.Fragment>
        <p>{characters.map((c) => this.getCharacter(c, gameLost))}</p>
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
