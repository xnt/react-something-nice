"use strict";

import getMessage from "./messages";
import React, { PureComponent } from "react";

export default class SomethingNice extends PureComponent {
  constructor(props) {
    super(props);
    this.message = getMessage();
  }

  render() {
    return (
      <span style={this.props.style} className={this.props.className}>
        {this.message}
      </span>
    );
  }
}
