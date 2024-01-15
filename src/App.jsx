import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    async function randomQuote() {
      const response = await fetch('https://api.quotable.io/random');
      const quote = await response.json();
      setQuote(quote.content);
      setAuthor(quote.author);
    }

    randomQuote(); 
  }, []); 

  let fetchNewQuote = async () => {
    const response = await fetch("https://api.quotable.io/random") ;
    const newQuote =await response.json();
    setQuote(newQuote.content);
    setAuthor(newQuote.author);
  };

  return (
    <div className="Page">
      <div className="container">
      <div className="quote">
        <h2>{quote}</h2>
        <div className="author">
          <small>-{author}</small>
        </div>
      </div><br />
      <button className="btn" onClick={fetchNewQuote}>Next Quote</button>
      </div>
    </div>
    
  );
}

export default App;
