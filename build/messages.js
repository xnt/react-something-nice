"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var messages = ["Have a great day ☕️!", "Lets' continue bringing out the best in one another 👌", "Thank you for your dedication, your time and your talent 👍", "Thank you for your hard work ✨", "Thank you 👏!", "We're glad that you're part of our team 🤗", "Your engineering team wishes you a fantastic day ♥"];

var getMessage = function getMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
};

var _default = getMessage;
exports["default"] = _default;