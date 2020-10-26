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
    return city.guessed ? city.character + "    " : "__    ";
  }
}

export default CityLetters;
