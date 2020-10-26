import React, { Component } from "react";

class Image extends Component {
  render() {
    return (
      <div className="row">
        <div className="col col-sm-5"></div>
        <img
          className="card-image image-fluid"
          src={require("../images/0.jpg")}
          alt="test"
          onClick={() => this.props.onClick(this.props.card)}
        />
      </div>
    );
  }
}

export default Image;
