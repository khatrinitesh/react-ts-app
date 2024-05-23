import React, { useEffect, useState } from "react";

const CustomApp: React.FC = () => {
 

  return (
    <>
      <QuoteSlideShow />
    </>
  );
};

export default CustomApp;

interface QuoteProps {
  text: string;
  author: string;
}

const QuoteSlideShow: React.FC = () => {
  const [quotes, setQuotes] = useState<QuoteProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://type.fit/api/quotes");
        if (!response.ok) {
          throw new Error("sorry something went wrong");
        }
        const data: QuoteProps[] = await response.json();
        setQuotes(data);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };

    fetchData();

    const intervalID = setInterval(() => {
      setCurrentIndex((prevInd) => (prevInd + 1) % quotes.length);
    }, 5000); // change quote every 5 sec
    return () => clearInterval(intervalID);
  }, [quotes]);

  return (
    <>
      <div className="quote-slideshow">
        <h1>Quote Slideshow</h1>
        {quotes.length > 0 && (
          <div className="quote">
            <blockquote>
              <p>{quotes[currentIndex].text}</p>
            </blockquote>
            <p>- {quotes[currentIndex].author}</p>
          </div>
        )}
      </div>
    </>
  );
};
