import React, { Component } from "react";

class CityLetters extends Component {
  render() {
    const { city } = this.props;
    return (
      <h3>{city.map((c) => (c.guessed ? c.character + "    " : "__    "))}</h3>
    );
  }
}

export default CityLetters;
