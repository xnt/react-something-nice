"use strict";

const messages = [
  "Have a great day ☕️!",
  "Let's continue bringing out the best in one another 👌",
  "Thank you for your dedication, your time and your talent 👍",
  "Thank you for your hard work ✨",
  "Thank you 👏!",
  "We're glad that you're part of our team 🤗",
  "Your engineering team wishes you a fantastic day ♥",
  "You're a rockstar!",
  "We're lucky to have you on this team!",
  "You have the best attitude!",
  "Thank you for always being so reliable",
  "You can totally do this💪",
  "You are doing great!",
  "You are beautiful",
  "If no one's told you yet today, you're doing great.",
  "You're good enough, you're smart enough, and doggone it, people like you!",
  "We're lucky to have you on this team!",
  "Never give up!",
  "We're lucky to have you on this team!",
  "Having you on this team makes a big difference",
  "It's so refreshing getting to work with you.",
  "The work that you do matters to our success.",
  "I am continually impressed by your results!",
  "You're awesome!",
  "You're kicking goals!",
  "You came, you saw, you conquered!",
  "You're the bees knees",
  "We appreciate all your hard work",
  "Your hard work doesn't go unnoticed! 👏",
  "Thank you for putting in the effort to make something great 👌",
  "We're doing great work together 🤗",
  "Good initiative! We can learn to colaborate with this activity!",
  "Dear Team Member, You are Amazing! Keep up your great Job!"
];

const mensajes = [
  "¡Que tengas un buen día ☕️ !",
  "¡Gracias por trabajar tanto!",
  "Muchas gracias :)",
  "Qué bien lo estás haciendo 👌",
  "Gracias por tu dedicación, tu tiempo y tu talento 👍",
  "¡Gracias 👏!",
  "Estamos contentos de que seas parte de nuestro grupo 🤗",
  "Tu grupo de ingrenieria te desea un fantastico día ♥",
  "¡Tienes la mejor actitud!",
  "Gracias por ser siempre tan confiable.",
  "Buena iniciativa! De esta manera aprendemos a colaborar!",
  "Gracias por este trabajo!",
  "Querido compañero, Eres increíble! Sigue así!"
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
