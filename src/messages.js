"use strict";

const messages = [
  "Have a great day ☕️!",
  "Lets' continue bringing out the best in one another 👌",
  "Thank you for your dedication, your time and your talent 👍",
  "Thank you for your hard work ✨",
  "Thank you 👏!",
  "We're glad that you're part of our team 🤗",
  "Your engineering team wishes you a fantastic day ♥",
  "Keep calm & good luck in the new job 🤗",
  "Your hard work and effort have paid off! A success well deserved, an occasion worth celebrating! Congratulations!👍",
  "If Oscars were given for a job well done, I’d nominate you! Congratulations for your fantastic achievement!👌",
  "Alone we can do so much little, together we can do so much. Your dedication and service is appreciated.",
  "Just an opportunity to say ‘wow’ and ‘ThankYou’ for all your great work.👊",
  "This is truly above and beyond. Keep it up.",
  "Congratulations for your fabulous victory! You deserve it every bit! Aim for the stars!🎉",
  "May success never leave your hand, and may you get everything you want. Congratulations.🎉",
  "Pursuing excellence is not a one time job. It is a way of life. Good job.",
  "The first step in a long journey of perfection and success starts with a good job.",
  "The reward for work well done is the opportunity to do more.",
  "I appreciate your quick response to help out a new customer!",
  "Keep calm and keep up the good work.",
  "You’ve got a winner’s attitude. Of course! You are a winner!👊",
  "Many thanks for all your hard work, we are so thankful for all that you do!",
  "Your dedication contributes to our success. You are a ROCKSTAR at work..!!!",
  "Good things come to those who work hard. Keep up the good work.",
  "I really like what you are doing, Keep up the good work.",
  "You did an excellent job.Thanks for being Awesome.",
  "A great employee is like a four leaf clover, hard to find & lucky to have.👊",
  "We can’t spell SUCCESS without U..!!🎉",
  "Love having you on the team. Thanks for all that you do.",
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
