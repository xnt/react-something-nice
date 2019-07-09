"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var messages = ["Have a great day ☕️!", "Lets' continue bringing out the best in one another 👌", "Thank you for your dedication, your time and your talent 👍", "Thank you for your hard work ✨", "Thank you 👏!", "We're glad that you're part of our team 🤗", "Your engineering team wishes you a fantastic day ♥"];
var mensajes = ["Que tengas un buen día = !", "Gracias por trabajar tanto!", "Muchas gracias :)", "Que bien lo estás haciendo 👌", "Gracias por tu dedicación, tu tiempo y tu talento 👍", "Gracias 👏!", "Estamos contentos de que seas parte de nuestro grupo 🤗", "Tu grupo de ingrenieria te desea un fantastico día ♥"];

var languages = function languages(lang) {
  var l = {
    en: messages,
    es: mensajes
  };
  return l[lang];
};

var getMessage = function getMessage(lang) {
  console.log("Lang en getMessage ".concat(lang));
  if (!lang) lang = 'en';
  var idiom = languages(lang);
  return idiom[Math.floor(Math.random() * idiom.length)];
};

var _default = getMessage;
exports["default"] = _default;