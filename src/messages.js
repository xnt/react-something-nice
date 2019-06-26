"use strict";

const messages = [
  "Have a great day ☕️!",
  "Lets' continue bringing out the best in one another 👌",
  "Thank you for your dedication, your time and your talent 👍",
  "Thank you for your hard work ✨",
  "Thank you 👏!",
  "We're glad that you're part of our team 🤗",
  "Your engineering team wishes you a fantastic day ♥"
];

const getMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
}

export default getMessage;