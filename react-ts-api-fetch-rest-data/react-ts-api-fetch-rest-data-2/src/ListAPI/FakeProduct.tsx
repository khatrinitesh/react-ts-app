import React, { useEffect, useState } from "react";

const FakeProduct = () => {
  const url = "http://localhost:5000/products/";

  const [products, setProducts] = useState<ProductsOne[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(false);
    setErrors(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`sorry something went wrong,${response.status}`);
      }
      const data: ProductsOne[] = await response.json();
      setProducts(data);
    } catch (error) {
      setErrors("failed to fetch data");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const btnDel = (id: number) => {
    const newProduct = products.filter((val) => val.id !== id);
    setProducts(newProduct);
  };
  return (
    <>
      {loading && <div>Loading...</div>}
      {errors && <div>{errors}</div>}
      {products.length > 0 && (
        <table className="">
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                <h2 style={{color:'red'}}>{product.id}</h2>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                  <p>Category: {product.category}</p>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "100px" }}
                  />
                  <p>
                    Rating: {product.rating.rate} ({product.rating.count}{" "}
                    reviews)
                  </p>
                  <button onClick={() => btnDel(product.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default FakeProduct;
