import React, { Component } from "react";

class Image extends Component {
  render() {
    const { choicesLeft, maxChoices } = this.props;
    const imagePath = maxChoices - choicesLeft + ".jpg";
    return <img src={require("../images/" + imagePath)} alt={imagePath} />;
  }
}

export default Image;
