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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> added new messages in spanish
=======
>>>>>>> added new messages in spanish
  "Muchas gracias :)",
  "Que bien lo estás haciendo 👌",
  "Gracias por tu dedicación, tu tiempo y tu talento 👍",
  "Gracias 👏!",
  "Estamos contentos de que seas parte de nuestro grupo 🤗",
  "Tu grupo de ingrenieria te desea un fantastico día ♥"
<<<<<<< HEAD
<<<<<<< HEAD
=======
  "Muchas gracias :)"
>>>>>>> added new language ES and EN as default.
=======
>>>>>>> added new messages in spanish
=======
  "Muchas gracias :)"
>>>>>>> added new language ES and EN as default.
=======
>>>>>>> added new messages in spanish
];

const languages = (lang) => {
  let l = {
    en: messages,
    es: mensajes
  }
  return l[lang];
}

const getMessage = (lang) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  if(!lang) lang = 'en';
  let currentLangCheck = AllowedLanguages.some(language => language.includes(lang));
  if(!currentLangCheck) lang = 'en';
=======
  console.log(`Lang en getMessage ${lang}`)
  if(!lang) lang = 'en';
>>>>>>> added new language ES and EN as default.
=======
  if(!lang) lang = 'en';
  let currentLangCheck = AllowedLanguages.some(language => language.includes(lang));
  if(!currentLangCheck) lang = 'en';
>>>>>>> simplified language check and deleted console.logs
=======
  console.log(`Lang en getMessage ${lang}`)
  if(!lang) lang = 'en';
>>>>>>> added new language ES and EN as default.
=======
  if(!lang) lang = 'en';
  let currentLangCheck = AllowedLanguages.some(language => language.includes(lang));
  if(!currentLangCheck) lang = 'en';
>>>>>>> simplified language check and deleted console.logs
  let idiom = languages(lang);
  return idiom[Math.floor(Math.random() * idiom.length)];
}

export default getMessage;