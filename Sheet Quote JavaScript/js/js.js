var quoteOutput = {
  arrayQuote: [
    '“Be yourself; everyone else is already taken.”',
    'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”',
    '“A room without books is like a body without a soul.”',
    '“Be the change that you wish to see in the world.”',
    '“In three words I can sum up everything I have learned about life: it goes on.”',
    '“If you tell the truth, you do not have to remember anything.”',
    '“I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell don not deserve me at my best.”',
    '“So many books, so little time.”'
  ]
};
var authorOutput = {
  arrayAuthor: [
    'Oscar Wilde',
    'Albert Einstein',
    'Marcus Tullius Cicero',
    'Mahatma Gandhi',
    'Robert Frost',
    'Mark Twain',
    'Marilyn Monroe',
    'Frank Zappa'
  ]
};


// function generateQuote(){
//   quoteOutput.value.arrayQuote[Math.round(2)];
// }
function generateQuote(){
  var x = 7* Math.random();
  return document.getElementById('quoteOutput').innerHTML = quoteOutput.arrayQuote[Math.ceil(x)],
  document.getElementById('authorOutput').innerHTML = authorOutput.arrayAuthor[Math.ceil(x)];
  
}
// // console.log(quoteOutput.arrayQuote[1])
// console.log(generateQuote())
// console.log(quoteOutput.arrayQuote[0])