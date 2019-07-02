"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var messages = ["Have a great day ☕️!", "Lets' continue bringing out the best in one another 👌", "Thank you for your dedication, your time and your talent 👍", "Thank you for your hard work ✨", "Thank you 👏!", "We're glad that you're part of our team 🤗", "Your engineering team wishes you a fantastic day ♥"];
//If we let that we have multiple types of messages
var firstDayMessages = ["Keep calm & good luck in the new job 🤗", "Your hard work and effort have paid off! A success well deserved, an occasion worth celebrating! Congratulations!👍"];
var getMessage = function getMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
};
var getFirstDayMessage = function getFirstDayMessage() {
  return firstDayMessages[Math.floor(Math.random() * firstDayMessages.length)];
}
var _default = getMessage;
var _firstDay = getFirstDayMessage;
exports["default"] = _default;
exports["firstDay"] = _firstDay;