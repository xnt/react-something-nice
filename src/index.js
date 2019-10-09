"use strict";

import { addMessages, getMessage } from "./messages";
import AllowedLanguages from "./allowedLanguages";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";

const SomethingNice = ({ className, lang, style, customMessages = [] }) => {
  addMessages({ lang, customMessages });
  const [message] = useState(getMessage(lang));

  return (
    <span style={style} className={className}>
      {message}
    </span>
  );
};

SomethingNice.defaultProps = {
  lang: "en"
};

SomethingNice.propTypes = {
  className: PropTypes.string,
  lang: PropTypes.oneOf(AllowedLanguages),
  style: PropTypes.object,
  customMessages: PropTypes.arrayOf(PropTypes.string)
};

export default SomethingNice;
