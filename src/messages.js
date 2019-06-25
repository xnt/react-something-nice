"use strict";

const messages = [
  "Thank you for your hard work ✨",
  "Have a great day ☕️!",
  "Your engineering team wishes you a fantastic day ♥"
];

const getMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
}

export default getMessage;