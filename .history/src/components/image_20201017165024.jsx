import React, { Component } from "react";

class Image extends Component {
  render() {
    const { choicesLeft, maxChoices } = this.props;
    const imagePath = maxChoices - choicesLeft + ".jpg";
    return (
      <img
        className="card-image image-fluid"
        src={require("../images/" + imagePath)}
        alt="test"
      />
    );
  }
}

export default Image;
