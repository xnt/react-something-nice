"use strict";

const messages = [
  "Have a great day ☕️!",
  "Lets' continue bringing out the best in one another 👌",
  "Thank you for your dedication, your time and your talent 👍",
  "Thank you for your hard work ✨",
  "Thank you 👏!",
  "We're glad that you're part of our team 🤗",
  "Your engineering team wishes you a fantastic day ♥",
  "You're a rockstar!",
  "We're lucky to have you on this team!"
];

const mensajes = [
  "¡Que tengas un buen día ☕️ !",
  "¡Gracias por trabajar tanto!",
  "Muchas gracias :)",
  "Qué bien lo estás haciendo 👌",
  "Gracias por tu dedicación, tu tiempo y tu talento 👍",
  "¡Gracias 👏!",
  "Estamos contentos de que seas parte de nuestro grupo 🤗",
  "Tu grupo de ingrenieria te desea un fantastico día ♥"
];

const meldungen = [
  "Ich wünsche dir einen wundervollen Tag!☕️",
  "Dankeschön für deine Zeit, dein Talent und deine Hingabe 👍",
  "Vielen Dank 👏!",
  "Vielen Dank für deine harte Arbeit ",
  "Vielen Dank für deine Hilfe und deine Zeit",
  "Du bist der Beste !",
  "Dein Team wünscht dir alles liebe",
  "Wir können uns glücklich schätzen dich im Team zu haben"
]

const languages = (lang) => {
  let l = {
    en: messages,
    es: mensajes,
    de: meldungen
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
