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
  "Dear Team Member, You are Amazing! Keep up your great Job!",
  "I appreciate you taking out time for the team :D",
  "I have learned so much from you,and I'm so appreciative of all the time you've taken to teach me new things!",
  "I am not a good team leader, just a representative of great team members. ",
  "It’s your dedication that contributed to our success. Thank you for inspiring us!",
  "Your dedication is imperative for the growth of our team. Thank you for your efforts!",
  "A good employee inspires his or her boss/colleagues. Thanks for being my inspiration.",
  "Your attention to detail at work makes you more special. Keep up the good work.",
  "Your desire and willingness fuel our mutual efforts and guide us to success.",
  "Having you in the team is a matter of privilege for us. Thank you!",
  "Every single day you inspire us with your good work. Kudos!",
  "It’s hard to imagine our team without you. Thank you!",
  "To be honest, I’m envious of your talents. But I’m privileged to have you as my colleague.",
  "Thank you for standing with us during all the ups and downs. We are glad to have you on our team.",
  "I must agree that you blow me every day with your dedication and good work.",
  "You and your work both are invaluable and both combined guarantees a successful future.",
  "You play a vital role in the prosperity of our company. Thank you for the hard work!",
  "A company dreams to have employees like you. We feel privileged to have you. Thank you!",
  "It’s time to stop and say thanks for your dedication.",
  "It’s your careful attention to detail that makes you so special.",
  "The new insight you provided was the greatest victory in the effort.",
  "We’re better because of you. Thanks for all you do.",
  "Words just can’t describe how much you are appreciated.",
  "Your personal commitment to quality is obvious in everything you do.",
  "Your ‘Whatever it takes attitude’ has made all the difference in this effort.",
  "It’s not the hours you put into your work that count, its work you put in the hours.",
  "We are so fortunate to have an innovator like you on our team.",
  "Today is a perfect day to tell you that no one could do a better job than the job you do!",
  "If our team were a car, you would be the fuel that accelerates it to its limits.",
  "You’re never a loser until you quit trying. You’re doing great..Well done!",
  "Keep calm and keep up the good work!",
  "You’ve got a winner’s attitude. Of course! You are a winner!",
  "So far you’ve survived 100% of your worst days. You are doing great.",
  "HAPPINESS IS..working with great people like you.",
  "A great employee is like a four leaf clover, hard to find & lucky to have.",
  "We can’t spell SUCCESS without U..!!"
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
