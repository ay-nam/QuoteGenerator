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

    randomQuote(); // Call the function to fetch the initial quote
  }, []); // Add an empty dependency array to run the effect only once

  let fetchNewQuote = () => {
    fetch("https://api.quotable.io/random") // Update the protocol to "https"
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);
          setAuthor(quote.author);
        }
      )
  };

  return (
    <div className="App">
      <div className="quote">
        <h2>{quote}</h2>
        <small>-{author}-</small>
      </div><br />
      <button className="btn" onClick={fetchNewQuote}>Generate New Quote</button>
    </div>
  );
}

export default App;
