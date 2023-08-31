const quotes = [
    "The only way to do great work is to love what you do. ",
    "Life is 10% what happens to us and 90% how we react to it. ",
    "The future belongs to those who believe in the beauty of their dreams. ",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. ",
    "In the middle of every difficulty lies opportunity. ",
    "Believe you can and you're halfway there. ",
    "The best way to predict the future is to create it. ",
    "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
    "Certain things catch your eye, but pursue only those that capture the heart."
  ];

const authors = [
    " - Steve Jobs", 
    " - Charles R. Swindoll", 
    " - Eleanor Roosevelt", 
    " - Winston Churchill", 
    " - Albert Einstein", 
    " - Theodore Roosevelt", 
    " - Peter Drucker",
    " - Aristotle",
    " - Ancient Indian Proverb"

];


const quoteDisplay = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
const quoteButton = document.getElementById("new-quote");

quoteButton.addEventListener("click", displayRandomQuote);

window.addEventListener('load', displayRandomQuote);

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = " '' " + quotes[randomIndex]+ " ''";
    quoteAuthor.textContent = authors[randomIndex];
    quoteDisplay.classList.toggle('fade-in-text');
}




