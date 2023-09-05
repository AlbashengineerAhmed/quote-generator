import React, { useEffect, useState } from "react";
import QuotesText from "../Components/QuotesText";
import QuotesAuthor from "../Components/QuoteAuthor";
import Buttons from "../Components/Buttons";
import "./Quotes.css";
import axios from "axios";

const Quotes = () => {
  const [quote, setQuote] = useState(
    "The Best Richness, is the Richness of Soul"
  );
  const [author, setAuthor] = useState("Prophet Muhammad (Peace be upon him)");
  const [quotesData, setQuotesData] = useState([]);
  const [color, setColor] = useState("rgb(243 , 156 , 18)");

  // Random color generator
  const randomColor = () => {
    let colorPatterns = "1234567890ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += colorPatterns[Math.floor(Math.random() * 16)];
    }
    return newColor;
  };

  useEffect(() => {
    if (quotesData.length === 0) {
      fetchQuotes();
    }
  }, [quotesData]);

  // Fetch quotes from API
  const fetchQuotes = () => {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((res) => {
        const quotesData = [...res.data.quotes];
        const newColor = randomColor();

        document.body.style.color = newColor;
        document.body.style.backgroundColor = newColor;

        setQuotesData(quotesData);
        setColor(newColor);
      })
      .catch((error) => console.log(error));
  };

  // Handle button click to change quote
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    const { quote, author } = quotesData[randomIndex];
    const newColor = randomColor();

    document.body.style.color = newColor;
    document.body.style.backgroundColor = newColor;

    setQuote(quote);
    setAuthor(author);
    setColor(newColor);
  };

  return (
    <div id="quote-box">
      <QuotesText quote={quote} color={color} />
      <QuotesAuthor author={author} color={color} />
      <Buttons handleClick={handleClick} color={color} />
    </div>
  );
};

export default Quotes;
