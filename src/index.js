"use strict";

import getMessage from './messages';
import AllowedLanguages from './allowedLanguages';
import React, { PureComponent } from 'react';
import { ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

 class SomethingNice extends PureComponent {


  constructor(props) {
    super(props);
    this.message = getMessage(props.lang);
  }

  render() {
    return (
      <span style={this.props.style} className={this.props.className}>
        {this.message}
      </span>
    );
  }
}

SomethingNice.defaultProps = {
  lang: 'en'
}

SomethingNice.propTypes = {
  lang: PropTypes.oneOf(AllowedLanguages),
  className: PropTypes.string,
  style: ViewPropTypes.style
}

export default SomethingNice;
