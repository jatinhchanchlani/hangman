import React, { Component } from "react";

class CityLetters extends Component {
  render() {
    const { city } = this.props;
    return (
      <React.Fragment>
        <br />
        <h3>{city.map((c) => this.getCharacter())}</h3>
      </React.Fragment>
    );
  }

  getCharacter() {
    return c.guessed ? c.character + "    " : "__    ";
  }
}

export default CityLetters;
