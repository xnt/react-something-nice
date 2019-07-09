"use strict";
import AllowedLanguages from './allowedLanguages';

const messages = [
  "Have a great day ☕️!",
  "Lets' continue bringing out the best in one another 👌",
  "Thank you for your dedication, your time and your talent 👍",
  "Thank you for your hard work ✨",
  "Thank you 👏!",
  "We're glad that you're part of our team 🤗",
  "Your engineering team wishes you a fantastic day ♥"
];

const mensajes = [
  "Que tengas un buen día = !",
  "Gracias por trabajar tanto!",
  "Muchas gracias :)",
  "Que bien lo estás haciendo 👌",
  "Gracias por tu dedicación, tu tiempo y tu talento 👍",
  "Gracias 👏!",
  "Estamos contentos de que seas parte de nuestro grupo 🤗",
  "Tu grupo de ingrenieria te desea un fantastico día ♥"
];

const languages = (lang) => {
  let l = {
    en: messages,
    es: mensajes
  }
  return l[lang];
}

const getMessage = (lang) => {
  if(!lang) lang = 'en';
  let currentLangCheck = AllowedLanguages.some(language => language.includes(lang));
  if(!currentLangCheck) lang = 'en';
  let idiom = languages(lang);
  return idiom[Math.floor(Math.random() * idiom.length)];
}

export default getMessage;