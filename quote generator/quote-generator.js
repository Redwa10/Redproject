
let btn = document.querySelector('.new-btn');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person')

const quotes = [
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    person: "Martin Fowler"
  },
  {
    quote: "Make it work, make it right, make it fast.",
    person: "Kent Beck"
  },
  {
    quote: "Code is read much more often than it is written.",
    person: "Guido van Rossum"
  },
  {
    quote: "The best error message is the one that never shows up.",
    person: "Thomas Fuchs"
  },
  {
    quote: "As a programmer, it is your job to put yourself out of business. What you do today can be automated tomorrow.",
    person: "Doug McIlroy"
  },
  {
    quote: "Simplicity is the soul of efficiency.",
    person: "Austin Freeman"
  },
  {
    quote: "Before software can be reusable it first has to be usable.",
    person: "Ralph Johnson"
  },
  {
    quote: "Walking on water and developing software from a specification are easy if both are frozen.",
    person: "Edward V. Berard"
  },
  {
    quote: "The most disastrous thing that you can ever learn is your first programming language.",
    person: "Alan Kay"
  },
  {
    quote: "Talk is cheap. Show me the code.",
    person: "Linus Torvalds"
  }
];

function newQuote(){
  const random = Math.floor(Math.random() * quotes.length);

  //let quote = quotes[random].quote
  //let person = quotes[random].person

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
}





btn.addEventListener('click', newQuote);