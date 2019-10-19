"use strict";

import getMessage from './messages';
import AllowedLanguages from './allowedLanguages';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SomethingNice = ({ className, lang, style, customMsg }) => {

  const message = useState(getMessage(lang));
  if(typeof customMsg == 'string' && customMsg){
    message.push(customMsg)
  }
  else if(customMsg){
    message.push(...customMsg)
  }
  message = message[Math.floor(Math.random() * message.length)]

  return (
    <span style={style} className={className}>
        {message}
    </span>
  );
}

SomethingNice.defaultProps = {
  lang: "en"
}

SomethingNice.propTypes = {
  className: PropTypes.string,
  lang: PropTypes.oneOf(AllowedLanguages),
  style: PropTypes.object,
  customMessage: PropTypes.any
}

export default SomethingNice;
