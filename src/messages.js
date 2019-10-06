"use strict";

const messages = [
  // New Messages - Start
  "Believe in yourself!", 
  "Have faith in your abilities!",
  "Thanks for your support!",
  "You're doing great!",
  "Teamwork makes the dream work!",
  "You're a vauluable member of the team!",
  "You're making a positive impact with your talent!",
  "Keep moving forward!",
  // New Messages - End
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
