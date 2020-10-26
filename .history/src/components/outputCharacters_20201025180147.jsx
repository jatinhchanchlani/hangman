import React, { Component } from "react";

class OutputCharacters extends Component {
  render() {
    const { characters } = this.props;
    console.log(characters);
    return (
      <React.Fragment>
        <br />
        <h3>{characters.map((c) => this.getCharacter(c))}</h3>
      </React.Fragment>
    );
  }

  getCharacter(character) {
    const emptySpace = "        ";
    if (character.character === " ") {
      return emptySpace;
    } else {
      if (character.guessed) {
        return character.character.toUpperCase() + emptySpace;
      } else {
        return "__" + emptySpace;
      }
    }
  }
}

export default OutputCharacters;
