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

// My array of quotes
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

// the function that fulls my randomQuote object with random quote data
function getRandomQuote() {
  getRandomNumber();
  // check a random number is always being pulled in
  // console.log(randomNumber);
  return quotes[randomNumber]
}

// I felt the need to make sure that a new quote displayed every time the user clicked, 
// so I made an extra function to achieve that

// I felt randomNumber had to be a global variable in order to pass the data between functions
// but not reset everytime the functions are called.
let randomNumber;

function getRandomNumber(num) {
  let newNumber = Math.floor(Math.random() * quotes.length);
  if (randomNumber != newNumber) {
    randomNumber = newNumber
    return randomNumber
  } else {
    // I don't find many reasons to use recursion. This seemed like a good opportunity.
    getRandomNumber();
  }
}


/***
 * `printQuote` function
***/

// the function that takes my now random quote object and puts it on the screen.
function printQuote() {
  var quoteObj = getRandomQuote();
  const quote = document.querySelector('#quote-box > .quote');
  const source = document.querySelector('#quote-box > .source');

  quote.innerHTML = quoteObj['quote'];
  source.innerHTML = quoteObj['source'];

  if(quoteObj['citation']) {
    source.innerHTML += "<span class='citation'>" + quoteObj['citation'] + "</span>";
  } 

  if(quoteObj['year']) {
    source.innerHTML += "<span class='year'>" + quoteObj['year'] + "</span>";
  } 

}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);