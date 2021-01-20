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
// quote array
var quotes = [
  {
   quote: "Act as if what you do makes a difference. It does.",
   author: "William James",
   year: 1884,
   citation: "Philosophy book"
  },

  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts",
    author: "Winston Churchill",
    year: 1949,
  },

  {
    quote: "Never bend your head. Always hold it high. Look the world straight in the eye.",
    author: "Helen Keller"
  },

  {
    quote: "What you get by achieving your goals is not as important as what you become by achieving your goals",
    author: "Zig Ziglar"
  },

  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  }

];


// tracks previous quotes
let previouslySelectedQuotes = [];

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
    let randomNumber;

    if (previouslySelectedQuotes.length === 5) {
      
      previouslySelectedQuotes = [];

    }
    

    do {
      
       randomNumber = Math.floor( Math.random() * 5);

    }
    while (previouslySelectedQuotes.includes(randomNumber));
    
    previouslySelectedQuotes.push(randomNumber);

    console.log(previouslySelectedQuotes);

    let selectedQuote = quotes[randomNumber];
    
    
    
    return selectedQuote;
    
  }
console.log(quotes[4].quote);
  console.log(previouslySelectedQuotes);
// console.log(getRandomQuote());

/***
 * `printQuote` function
***/

function printQuote() {
  let randomQ = getRandomQuote();
  
  
  //console.log(randomQ);
  
  let objectArray = [];

  for (let key in randomQ) {
     objectArray += [`${key}, ` ];
  }
   
  //console.log(objectArray);

  let html = `<p class="quote"> ${randomQ['quote']} </p>
              <p class="source"> ${randomQ['author']} </p>`;

              // if statements that test each object and see how many properties there are to display to html
  
              if (objectArray.includes('citation') && objectArray.includes('year')) {
                html = `<p class="quote"> ${randomQ['quote']} </p>
                        <p class="source"> ${randomQ['author']}
                            <span class="citation"> ${randomQ['citation']} </span>
                            <span class="year"> ${randomQ['year']} </span>
                        </p>`;
              } else if (objectArray.includes('citation')) {
                html = `<p class="quote"> ${randomQ['quote']} </p>
                        <p class="source"> ${randomQ['author']}
                            <span class="citation"> ${randomQ['citation']} </span>
                        </p>`;
              } else if (objectArray.includes('year')) {
                html = `<p class="quote"> ${randomQ['quote']} </p>
                        <p class="source"> ${randomQ['author']}
                            <span class="year"> ${randomQ['year']} </span>
                        </p>`;
              } 
        
              return document.getElementById('quote-box').innerHTML = html;
}

// console.log(printQuote());




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
