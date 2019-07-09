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

const mensajes = [
  "Que tengas un buen día = !",
  "Gracias por trabajar tanto!",
  "Muchas gracias :)"
];

const languages = (lang) => {
  let l = {
    en: messages,
    es: mensajes
  }
  return l[lang];
}

const getMessage = (lang) => {
  console.log(`Lang en getMessage ${lang}`)
  if(!lang) lang = 'en';
  let idiom = languages(lang);
  return idiom[Math.floor(Math.random() * idiom.length)];
}

export default getMessage;