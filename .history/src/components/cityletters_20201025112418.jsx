import React, { Component } from "react";

class CityLetters extends Component {
  render() {
    const { city } = this.props;
    console.log(this.props.city);

    return <h4>{city[0].character}</h4>;
  }
}

export default CityLetters;
