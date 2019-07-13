"use strict";

import getMessage from './messages';
import AllowedLanguages from './allowedLanguages';
import { PureComponent } from 'react';
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
  className: PropTypes.string,
  lang: PropTypes.oneOf(AllowedLanguages),
  style: PropTypes.object
}

export default SomethingNice;
