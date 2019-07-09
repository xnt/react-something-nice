"use strict";

import getMessage from './messages';
import React, { PureComponent } from 'react';

export default class SomethingNice extends PureComponent {

  constructor(props) {
    super(props);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    if(!props.lang) props.lang == 'en';
    let result = AllowedLanguages.filter(language => language === props.lang);
    if(!result) props.lang == 'en';
>>>>>>> added new language ES and EN as default.
=======
>>>>>>> simplified language check and deleted console.logs
=======
    if(!props.lang) props.lang == 'en';
    let result = AllowedLanguages.filter(language => language === props.lang);
    if(!result) props.lang == 'en';
>>>>>>> added new language ES and EN as default.
=======
>>>>>>> simplified language check and deleted console.logs
=======
>>>>>>> ddfec73f930dc31b311ad752dd23f862e9b41754
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
