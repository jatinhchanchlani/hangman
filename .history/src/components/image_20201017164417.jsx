import React, { Component } from "react";

class Image extends Component {
  render() {
    const { choicesLeft, maxChoices } = this.props;
    const imageName = maxChoices - choicesLeft + ".jpg";
    return (
      <div className="row">
        <div className="col col-sm-5"></div>
        <img
          className="card-image image-fluid"
          src={require("../images/" + imageName)}
          alt="test"
          onClick={() => this.props.onClick(this.props.card)}
        />
      </div>
    );
  }
}

export default Image;