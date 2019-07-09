"use strict";

import getMessage from './messages';
import AllowedLanguages from './allowedLanguages';
import React, { PureComponent } from 'react';

export default class SomethingNice extends PureComponent {
  constructor(props) {
    super(props);
    if(!props.lang) props.lang == 'en';
    let result = AllowedLanguages.filter(language => language === props.lang);
    if(!result) props.lang == 'en';
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
