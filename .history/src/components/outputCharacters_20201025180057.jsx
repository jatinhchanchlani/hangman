import React, { Component } from "react";

class CityLetters extends Component {
  render() {
    const { outputCharacters } = this.props;
    console.log(outputCharacters);
    return (
      <React.Fragment>
        <br />
        <h3>{outputCharacters.map((c) => this.getCharacter(c))}</h3>
      </React.Fragment>
    );
  }

  getCharacter(cityCharacter) {
    const emptySpace = "        ";
    if (cityCharacter.character === " ") {
      return emptySpace;
    } else {
      if (cityCharacter.guessed) {
        return cityCharacter.character.toUpperCase() + emptySpace;
      } else {
        return "__" + emptySpace;
      }
    }
  }
}

export default CityLetters;
