import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(setProducts);
  }, []);

  const addToCart = async (productId) => {
    await fetch("http://localhost:5000/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, productId })
    });
    alert("Added to cart");
  };

  return (
    <>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p._id}>
          {p.title} - ₹{p.price}
          <button onClick={() => addToCart(p._id)}>Add</button>
        </div>
      ))}
    </>
  );
}