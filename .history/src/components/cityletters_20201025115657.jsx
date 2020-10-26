import React, { Component } from "react";

class CityLetters extends Component {
  render() {
    const { cityCharacters } = this.props;
    console.log(cityCharacters);
    return (
      <React.Fragment>
        <br />
        <h3>{cityCharacters.map((c) => this.getCharacter(c))}</h3>
      </React.Fragment>
    );
  }

  getCharacter(cityCharacter) {
    const emptySpace = "        ";
    if (cityCharacter.character === " ") {
      return emptySpace;
    } else {
      if (cityCharacter.guessed) {
        return cityCharacter.character + emptySpace;
      } else {
        return "__" + emptySpace;
      }
    }
  }
}

export default CityLetters;
