import React, { useEffect, useState } from "react";

const CustomApp: React.FC = () => {
 

  return (
    <>
      <RandomQuote />
    </>
  );
};

export default CustomApp;

interface QuoteProps {                                                                                                                                                                                                                                               
  text: string;
  author: string;
}

const RandomQuote: React.FC = () => {
  const [quotes, setQuotes] = useState<QuoteProps | null>(null);

  useEffect(() => {
    const fetchDataQ = async () => {
      try {
        const response = await fetch("https://type.fit/api/quotes");
        if (!response.ok) {
          throw new Error("sorry something went wrong");
        }
        const data: QuoteProps[]  = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex]
        setQuotes(randomQuote);
        console.log(randomQuote);
        
      } catch (error) {
        console.error("error fetching data", error);
      }
    };

    fetchDataQ();

  }, []);

  return (
    <>
      <div className="quote-slideshow">
        <h1>Quote Slideshow</h1>
        {quotes ? (<>   
            <div>
          <blockquote>
            <p>{quotes.text}</p>
          </blockquote>
          <p>- {quotes.author}</p>
        </div></>)
         : (<p>Loading...</p>)}
      </div>
    </>
  );
};
