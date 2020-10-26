import React, { Component } from "react";

class CityLetters extends Component {
  render() {
    const { city } = this.props;
    return (
      <React.Fragment>
        <br />
        <h3>{city.map((c) => this.getCharacter(c))}</h3>
      </React.Fragment>
    );
  }

  getCharacter(city) {
    const emptySpace = "        ";
    if (city.character === " ") {
      return emptySpace;
    } else {
      if (city.guessed) {
        return city.character + emptySpace;
      } else {
        return "__" + emptySpace;
      }
    }
  }
}

export default CityLetters;
