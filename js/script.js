/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    "quote": "Don't have a cow man",
    "source": "Bart Simpson",
    "citation" : "The Simpsons",
    "year" : ""
  },
  {
    "quote": "Better to Remain Silent and Be Thought a Fool than to Speak and Remove All Doubt",
    "source": "Abraham Lincoln",
    "citation" : "https://quoteinvestigator.com/2010/05/17/remain-silent/",
    "year" : ""
  },
  {
    "quote": " I shouldn't be up here. I should be back in school on the other side of the ocean. Yet you all come to us young people for hope. How dare you! You have stolen my dreams and my childhood with your empty words.",
    "source": "Greta Thunberg",
    "citation" : "UN Global Climate Action Summit in New York",
    "year" : "2019",
  },
  {
    "quote": "The world is a dangerous place, not because of those who do evil, but because of those who look on and do nothing.",
    "source": "Albert Einstein",
    "citation": "",
    "year": ""
  },
  {
    "quote": "The problem is that humans have victimized animals to such a degree that they are not even considered victims.",
    "source": "Gary Yourofsky",
    "citation" : "Youtube: https://www.youtube.com/watch?v=U5hGQDLprA8",
    "year" : ""
  },
  {
    "quote": "My body will not be a tomb for other creatures.",
    "source": "Leonardo Da Vinci",
    "citation" : "https://meatyourfuture.com/2019/04/leonardodavinci/",
    "year": "",
  }
]



/***
 * `getRandomQuote` function
***/

let randomQuote = [ {
    "quote": "",
    "source": "",
    "citation": "",
    "year": "",
  },
];
let randomNumber;
  

function getRandomQuote() {
  getRandomNumber();
  randomQuote['quote'] = quotes[randomNumber].quote
  randomQuote['source'] = quotes[randomNumber].source
  randomQuote['citation'] = quotes[randomNumber].citation
  randomQuote['year'] = quotes[randomNumber].year
}

function getRandomNumber() {
  let newNumber = Math.floor(Math.random() * quotes.length);
  if (randomNumber != newNumber) {
    randomNumber = newNumber
  } else {
    getRandomNumber();
  }
}


/***
 * `printQuote` function
***/

function printQuote() {
  getRandomQuote();
  const quote = document.querySelector('#quote-box > .quote');
  const source = document.querySelector('#quote-box > .source');

  quote.innerHTML = randomQuote['quote'];
  source.innerHTML = randomQuote['source'];

  // const citation = document.querySelector('#quote-box .citation');
  // const year = document.querySelector('#quote-box .year');
  // // citation.innerHTML = randomQuote['citation'];
  // // year.innerHTML = randomQuote['year'];
  if(randomQuote['citation']) {
    source.innerHTML += "<span class='citation'>" + randomQuote['citation'] + "</span>";
  } 

  if(randomQuote['year']) {
    source.innerHTML += "<span class='year'>" + randomQuote['year'] + "</span>";
  } 

}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);