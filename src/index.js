"use strict";

import getMessage from './messages';
import AllowedLanguages from './allowedLanguages';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

 class SomethingNice extends PureComponent {


  constructor(props) {
    super(props);
    this.message = getMessage(props.lang);
  }

  render() {
    return (
      <span>
        { this.message }
      </span>
    )
  }
}

SomethingNice.defaultProps = {
  lang: 'en'
}

SomethingNice.propTypes = {
  lang: PropTypes.oneOf(AllowedLanguages)
}

export default SomethingNice;
