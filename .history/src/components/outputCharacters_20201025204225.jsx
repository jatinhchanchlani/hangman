import React, { Component } from "react";

class OutputCharacters extends Component {
  render() {
    const { characters, choicesLeft } = this.props;
    console.log(characters);
    return (
      <React.Fragment>
        <br />
        <h3>{characters.map((c) => this.getCharacter(c, choicesLeft))}</h3>
      </React.Fragment>
    );
  }

  getCharacter(character, choicesLeft) {
    const emptySpace = "        ";
    if (character.value === " ") {
      return emptySpace;
    } else {
      if (character.guessed || choicesLeft === 0) {
        return character.value.toUpperCase() + emptySpace;
      } else {
        return "__" + emptySpace;
      }
    }
  }
}

export default OutputCharacters;
