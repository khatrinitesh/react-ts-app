import React, { useState } from "react";

interface Product {
  name: string;
  price: number;
}

const ExampleReduce: React.FC = () => {
  const [products] = useState<Product[]>([
    { name: "Apple", price: 30 },
    { name: "Banana", price: 20 },
    { name: "Mango", price: 50 },
  ]);

  const totalPrice: number = products.reduce(
    (sum, product) => sum + product.price,
    0
  );

  const productList = products.map((item, index) => (
    <li key={index}>
      {item.name} - ₹{item.price}
    </li>
  ));
  return (
    <>
      <div style={{ padding: "1rem", fontFamily: "Arial" }}>
        <h2>
          React TypeScript Example – <code>reduce()</code>
        </h2>

        <ul>{productList}</ul>
        <p>
          <strong>Total Price:</strong> ₹{totalPrice}
        </p>
      </div>
    </>
  );
};

export default ExampleReduce;
