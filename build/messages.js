"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var messages = ["Have a great day ☕️!", "Lets' continue bringing out the best in one another 👌", "Thank you for your dedication, your time and your talent 👍", "Thank you for your hard work ✨", "Thank you 👏!", "We're glad that you're part of our team 🤗", "Your engineering team wishes you a fantastic day ♥", "You're a rockstar!", "We're lucky to have you on this team!"];
var mensajes = ["¡Que tengas un buen día ☕️ !", "¡Gracias por trabajar tanto!", "Muchas gracias :)", "Qué bien lo estás haciendo 👌", "Gracias por tu dedicación, tu tiempo y tu talento 👍", "¡Gracias 👏!", "Estamos contentos de que seas parte de nuestro grupo 🤗", "Tu grupo de ingrenieria te desea un fantastico día ♥"];
var messages_fr = [  "Bonne journée!", "Continuons à faire ressortir le meilleur l'un de l'autre!", "Merci pour votre travail acharné!", "On est heureux que vous fassiez partie de notre équipe", "Merci pour votre dévouement, votre temps et votre talent!", "Votre équipe apprécie tout ce que vous apportez à la table.", "Votre travail est apprécié ici!"];
var languages = function languages(lang) {
  var l = {
    en: messages,
    es: mensajes,
    fr: messages_fr
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
