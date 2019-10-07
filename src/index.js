"use strict";

import getMessage from './messages';
import AllowedLanguages from './allowedLanguages';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SomethingNice = ({
  allowDefault,
  className,
  customMessages,
  lang,
  style
}) => {

  const [message] = useState(getMessage(allowDefault, customMessages, lang));

  return (
    <span style={style} className={className}>
        {message}
    </span>
  );
}

SomethingNice.defaultProps = {
  allowDefault: true,
  customMessages: [],
  lang: "en"
}

SomethingNice.propTypes = {
  allowDefault: PropTypes.bool,
  className: PropTypes.string,
  customMessages: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.oneOf(AllowedLanguages),
  style: PropTypes.object
}

export default SomethingNice;
