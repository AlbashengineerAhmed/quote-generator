const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const facebookBtn = document.getElementById("facebook");
const instagramBtn = document.getElementById("instagram");
const whatsappBtn = document.getElementById("whatsapp");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById('loader');

let apiQuotes = [];

// Loading Spinner Shown
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Remove Loading Spinner
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Show New Quote
function newQuote(){
  loading();
  // Pick a random quote from apiQuotes array
  // console.log(apiQuotes)
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // console.log(quote)
  // Check if Author field is blank and replace it with "UnKnown"
  if (!quote.author) {
    authorText.textContent = "Unknown";
  }else{
    authorText.textContent = quote.author;
  }
  
  // Check Quote Length to determine styling
  if(quote.text.length >120){
    quoteText.classList.add("long-quote");
  }else{
    quoteText.classList.remove("long-quote");
  }
    // Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    complete();
}

// Get Quote from API
async function getQuote(){
  loading();
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    // console.log(apiQuotes);
    newQuote();    
  } catch(error){
    // Catch Error Here
  }
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// on Load
getQuote();

