


const button = document.getElementById("quoteButton");
const quoteContainer = document.getElementById("quoteContainer");
const quoteAuthor = document.getElementById("quoteAuthor");



const quotes = [
    {  
        quotes : `The only way to do great work is to love what you do.`,
        author : `- Steve Jobs`
    },
    {  
        quotes : `In the middle of difficulty lies opportunity.`,
        author : ` - Albert Einstein`,
    },
    {  
        quotes : `The best way to predict the future is to create it.`,
        author : `- Peter Drucker`,
    },
    {  
        quotes : `Believe you can and you're halfway there.`,
        author : ` - Theodore Roosevelt`,
    },
    {  
        quotes : `Success is not final, failure is not fatal: It is the courage to continue that counts.`,
        author : `- Winston Churchill`,
    },
    {  
        quotes : `Be yourself; everyone else is already taken.`,
        author : `― Oscar Wilde`,
    },
    {  
        quotes : `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        author : `- Winston Churchill`,
    },
    {  
        quotes : `So many books, so little time.”`,
        author : `― Frank Zappa`,
    },
    {  
        quotes : `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
        author : `― Bernard M. Baruch`,
    },  
    {  
        quotes : `السح الدح امبو`,
        author : `― عدوية`,
    },  
  
  

];


button.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex].quotes;
  const randomAuthor = quotes[randomIndex].author;

  quoteContainer.textContent = randomQuote;
  quoteAuthor.textContent = randomAuthor;

  

});




