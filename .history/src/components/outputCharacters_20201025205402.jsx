import React, { Component } from "react";

class OutputCharacters extends Component {
  render() {
    const { characters, gameLost } = this.props;
    console.log(characters);
    return (
      <React.Fragment>
        {characters.map((c) => this.getCharacter(c, gameLost))}
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
