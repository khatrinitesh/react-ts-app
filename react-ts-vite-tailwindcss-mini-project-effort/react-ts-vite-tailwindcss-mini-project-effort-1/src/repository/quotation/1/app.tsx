import React, { useEffect, useState } from "react";

const CustomApp: React.FC = () => {
  const handleQtyChange = (value: number) => {
    console.log("Quantity changed:", value);
    // You can perform any action when the quantity changes here
  };

  return (
    <div>
      <Quotation />
    </div>
  );
};

export default CustomApp;

interface QuotationProps {
  text: string;
  author: string;
}

const Quotation:React.FC = () => {

    const [quotation,setQuotation] = useState<QuotationProps | null>(null);

    useEffect(() => {
        const fetchQuotation = async () => {
            try {
                const response = await fetch('https://type.fit/api/quotes')
                if(!response.ok){
                    throw new Error('sorry something went wrong')
                }
                const data:{text:string;author:string}[] = await response.json(); // 1
                const randomIndex = Math.floor(Math.random() * data.length); // 2
                const randomQuotation = data[randomIndex];
                setQuotation(randomQuotation)
                console.log(randomQuotation);
                
            } catch (error) {
                console.error('error',error);
                
            }
        }
        fetchQuotation();
        
    },[]);

    
    

  return (
    <>
     <h1>Random Quotation</h1>
      {quotation && (
        <div>
          <blockquote>
            <p>{quotation.text}</p>
          </blockquote>
          <p>- {quotation.author}</p>
        </div>
      )}
    </>
  );
};
