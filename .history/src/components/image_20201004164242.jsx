import React, { Component } from "react";

class Image extends Component {
  render() {
    return (
      <img
        className="card-image image-fluid"
        src={require("../images/0.jpg")}
        alt="test"
        onClick={() => this.props.onClick(this.props.card)}
      />
    );
  }
}

export default Image;
