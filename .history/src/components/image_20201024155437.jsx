import React, { Component } from "react";

class Image extends Component {
  render() {
    const { choicesLeft, maxChoices } = this.props;
    const imagePath = maxChoices - 1 + ".jpg";
    return (
      <img
        className="card-image image-fluid"
        src={require("../images/" + imagePath)}
        alt={imagePath}
      />
    );
  }
}

export default Image;
